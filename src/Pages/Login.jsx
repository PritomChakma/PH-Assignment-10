import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.avif";
import { AuthContex } from "../Router/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContex);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

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
          <form onSubmit={handleLogin}>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="bg-gray-700 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="">
              <label className="label ">
                <span className="block text-gray-300 text-sm font-bold mb-2">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a Password"
                className="bg-gray-700 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className=" mt-5 ">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-bold my-3 text-white">
            You Dont have Account? Please
            <Link className="text-[#4335A7]" to="/registration">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
