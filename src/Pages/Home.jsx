import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import HomeCard from "../Components/HomeCard";

const Home = () => {
  const reviews = useLoaderData();

  const sortedReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div>
      <div>
        {/* banner */}
        <Banner></Banner>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto mt-10">
        {sortedReviews.map((review) => (
          <HomeCard key={review._id} review={review}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
