import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContex);
  // console.log(user.email);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://ph-assignment-10-server-six.vercel.app/myReview?email=${user.email}`
    )
      .then((req) => req.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [user]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto py-5">
      {myReview.map((myRev) => (
        <MyReviewCard
          key={myRev._id}
          myRev={myRev}
          myReview={myReview}
          setMyReview={setMyReview}
        ></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReview;
