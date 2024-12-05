import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";
const GameWatchList = () => {
  const { user } = useContext(AuthContex);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/watchlist?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [user]);

  return (
    <div className="wishlist-container">
      <div className="wishlist-items ">
        {wishlist.map((item) => (
          <div key={item._id} className="wishlist-card mt-5">
            <div className="flex flex-row gap-6 p-6 bg-base-200 rounded-xl shadow-xl md:w-10/12 mx-auto  items-center">
              <img className="md:w-52 rounded-xl h-40" src={item.photo} />
              <div className="space-y-2">
                <span className="font-semibold"> Name : </span> {item.name}
                <h4>
                  <span className=" font-semibold">Reviewer Email: </span>{" "}
                  {item.email}
                </h4>
                <div className="rating flex items-center">
                  <div className="flex text-orange-500">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="ml-4">
                    <span className="font-semibold">Rating: </span>
                    {item.rating}/10
                  </p>
                </div>
                <br />
                <div className="flex gap-6">
                  <button
                  
                    className="btn rounded-full px-4 text-white bg-[#9538E2]"
                  >
                    Remove to WatchList
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameWatchList;
