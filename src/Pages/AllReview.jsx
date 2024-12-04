import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllReview = () => {
  const reviews = useLoaderData();
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto py-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
