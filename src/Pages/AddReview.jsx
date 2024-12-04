import Swal from 'sweetalert2'
import banner from "../assets/AddMy.jpeg";
import { useContext } from 'react';
import { AuthContex } from '../Router/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContex)
    // console.log(user);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email
    const photo = form.photo.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const description = form.description.value;
    const addReview = { name, photo, rating, year, description,email };
    console.log(addReview);
  
    // send data to the server
    fetch("http://localhost:5000/allReview",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(addReview)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Added Review Scuccessfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  };

  return (
    <div>
      <div
        className="bg-cover bg-center md:p-24 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-3xl font-bold text-center my-5 text-white">
          Add Review
        </h2>
        <p className="text-center md:w-10/12 mx-auto mb-10 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className=" backdrop-blur-sm rounded-lg  ">
          <form
            onSubmit={handleAddReview}
            className="w-10/12 mx-auto backdrop-blur-sm"
          >
            {/* Name and Quantity Form Row */}
            <div className="md:flex gap-8 px-2 my-3">
              <div className="form-control md:w-1/2">
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
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Photo Url: Use imgbb
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Rating Form */}
            <div className="md:flex gap-8 px-2">
              <div className="form-control md:w-1/2">
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
              <div className="form-control md:w-1/2">
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

            {/* Description */}
            <div className="form-control md:w-full px-2 my-3">
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
                cols="50"
                required
              ></textarea>
            </div>

            <input
              type="submit"
              value="Submit "
              className="btn btn-block bg-[#D2B48C] my-7 px-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
