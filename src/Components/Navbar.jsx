import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContex);
  const [theme, setTheme] = useState("light"); 


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="">
      <div className="navbar bg-gray-900 text-white h-20">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink>Home</NavLink>
            <NavLink to="/allReview">All Reviews</NavLink>
            <NavLink to="/addReview">Add Review </NavLink>
            <NavLink to="/myReview">My Reviews</NavLink>
            <NavLink to="/gameWatchList">WatchList</NavLink>
            {/* Theme Toggle */}
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </ul>
        </div>
        <div className="relative flex items-center space-x-4 navbar-end">
          <div className="relative group">
            {user ? (
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500 cursor-pointer"
              />
            ) : (
              <i className="fa-solid fa-user"></i>
            )}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user?.displayName}
            </div>
          </div>
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
