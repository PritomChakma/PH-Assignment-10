import { useContext } from "react";
import Swal from "sweetalert2";
import banner from "../assets/AddMy.jpeg";
import { AuthContex } from "../Router/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContex);
  // console.log(user);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const description = form.description.value;
    const addReview = { name, photo, rating, year, description, email };
    console.log(addReview);

    // send data to the server
    fetch("https://ph-assignment-10-server-six.vercel.app/allReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Added Review Scuccessfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center p-4 sm:p-8 md:p-12 lg:p-24"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center my-5 text-white">
          Add Review
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg md:w-8/12 lg:w-7/12 mx-auto mb-10 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        <div className="backdrop-blur-sm rounded-lg bg-gray-800 bg-opacity-50 p-6 sm:p-8 md:p-12">
          <form
            onSubmit={handleAddReview}
            className="w-full max-w-screen-lg mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Game Title
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Game Title"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Photo URL: Use imgbb
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label htmlFor="rating">
                  <span className="label-text font-semibold text-white">
                    Rating (1-10):
                  </span>
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="1"
                  max="10"
                  placeholder="Enter rating (1-10)"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="year">
                  <span className="label-text font-semibold text-white">
                    Publish Year:
                  </span>
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="2000"
                  placeholder="Enter publishing year"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="description">
                <span className="label-text font-semibold text-white">
                  Review Description:
                </span>
              </label>
              <textarea
                id="description"
                name="description"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your game review here..."
                rows="5"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn  bg-[#D12F42] hover:bg-gray-900 text-white w-full  px-6 py-3 rounded-lg my-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
