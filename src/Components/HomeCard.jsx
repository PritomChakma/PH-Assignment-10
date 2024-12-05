import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";
const HomeCard = ({ review }) => {
  const { user } = useContext(AuthContex);
  const { photo, name, description, rating } = review;

  const handleAddWishList = (review) => {
    fetch("http://localhost:5000/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: review.name,
        description: review.description,
        photo: review.photo,
        rating: review.rating,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added to Wishlist Successfully!");
        } else {
          toast.error("Failed to add to Wishlist. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src={photo}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
        <p className="text-sm dark:text-gray-600">{description}</p>
      </div>

      <div className="flex justify-between">
        <div>
          <p>
            <span className="font-bold mr-2">Rating:</span>
            {rating}/10
          </p>
        </div>
        <div className="flex text-orange-500">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <Link to={`/exploreDetails/${review._id}`}>
            <button className="btn">Explore Details</button>
          </Link>
        </div>
        <div>
          <i
            onClick={() => handleAddWishList(review)}
            className="fa-solid fa-heart text-xl text-red-500 btn"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
