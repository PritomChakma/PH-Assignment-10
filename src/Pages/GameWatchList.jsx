import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContex);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(
      `https://ph-assignment-10-server-six.vercel.app/watchlist?email=${user.email}`
    )
      .then((req) => req.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [user]);

  return (
    <div className="wishlist-container px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item._id}
            className="wishlist-card bg-white shadow-lg rounded-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.photo}
              alt={item.name}
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Reviewer:</span> {item.email}
              </p>
              <div className="flex items-center gap-2 text-yellow-500">
                <span className="text-sm text-gray-500">{item.rating}/10</span>
              </div>
              <button className="w-full mt-2 py-2 px-4 text-white rounded-full hover:bg-gray-900 bg-[#EA4744]">
                Remove from Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameWatchList;
