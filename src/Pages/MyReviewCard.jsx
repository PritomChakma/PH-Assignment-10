import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../Router/AuthProvider";

const MyReviewCard = ({ myRev }) => {
  const { user } = useContext(AuthContex);
  const { _id, photo, name, description, rating } = myRev;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myReview/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
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
        <Link to={`/updateReview/${_id}`}>
          <div>
            <button className="btn bg-gray-800 text-white">Update</button>
          </div>
        </Link>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-[#EA4744] text-white"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
