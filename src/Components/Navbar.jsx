import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContex);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };
  return (
    <div className=" ">
      <div className="navbar bg-gray-900 text-white h-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink>Home</NavLink>
              <NavLink to="/allReview">All Reviews</NavLink>
              <NavLink to="/addReview">Add Review </NavLink>
              <NavLink to="/myReview">My Reviews</NavLink>
              <NavLink to="/gameWatchList">WatchList</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GameHaven</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink>Home</NavLink>
            <NavLink to="/allReview">All Reviews</NavLink>
            <NavLink to="/addReview">Add Review </NavLink>
            <NavLink to="/myReview">My Reviews</NavLink>
            <NavLink to="/gameWatchList">WatchList</NavLink>
          </ul>
        </div>

        <div className="relative flex items-center space-x-4 navbar-end">
          {/* User Avatar */}
          <div className="relative group">
            {user ? (
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer"
              />
            ) : (
              <i class="fa-solid fa-user"></i>
            )}
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user?.displayName}
            </div>
          </div>

          {/* Logout Button */}
          {user ? (
            <NavLink
              to="/login"
              onClick={handleSignOut}
              className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-bold"
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-bold"
            >
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
