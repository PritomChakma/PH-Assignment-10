import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({ myRev, myReview, setMyReview }) => {
  const { _id, photo, name, rating, email, genres } = myRev;

  const handleDelete = (_id) => {
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
        fetch(
          `https://ph-assignment-10-server-six.vercel.app/myReview/${_id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myReview.filter((rev) => rev._id !== _id);
              setMyReview(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Rating</th>
            <th>Genres</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold">{name}</div>
                  <div className="text-sm opacity-50">{email}</div>
                </div>
              </div>
            </td>
            <td>{rating}/10</td>
            <td>{genres}</td>
            <th>
              <div className="flex ">
                <Link to={`/updateReview/${_id}`}>
                  <div>
                    <button className="btn bg-gray-800 text-white">
                      Update
                    </button>
                  </div>
                </Link>
                <div>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn join-item bg-[#EA4744] text-white"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewCard;
