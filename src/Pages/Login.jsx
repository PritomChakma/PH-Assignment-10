import { Link } from "react-router-dom";
import banner from "../assets/banner.avif";

const Login = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-gray-900 flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`, // Replace with the actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-2 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-sm w-full">
          <h1 className="text-3xl font-bold text-green-500 text-center mb-6">
            GameZone Login
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-700 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-700 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/registration" className="text-green-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
