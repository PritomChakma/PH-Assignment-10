import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContex);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [user]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
      {myReview.map((myRev) => (
        <MyReviewCard key={myRev._id} myRev={myRev}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReview;
