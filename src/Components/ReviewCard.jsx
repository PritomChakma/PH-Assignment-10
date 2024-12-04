const ReviewCard = ({ review }) => {
  const { photo, name, description, rating } = review;
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
          <button className="btn">Explore Details"</button>
        </div>
        <div>
          <i className="fa-solid fa-heart text-xl text-red-500 btn"></i>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
