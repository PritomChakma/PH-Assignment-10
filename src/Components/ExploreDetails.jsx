import { useLoaderData } from "react-router-dom";

const ExploreDetails = () => {
  const review = useLoaderData();

  return (
    <div className="w-11/12 mx-auto flex justify-center">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={review.photo}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 bg-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <p>
                  <span className="font-bold mr-2">Rating:</span>
                  {review.rating}/10
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
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {review.name}
              </h3>
            </a>
            <h3>
              <span className="mr-2 font-bold">Reviewer Email:</span>
              {review.email}
            </h3>

            <p className="leading-snug dark:text-gray-600">
              {review.description}
            </p>
          </div>
          <div><button className="btn w-full btn-primary font-bold">Add to WishList</button></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
