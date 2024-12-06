import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Game Haven</h2>
              <p className="text-sm">
                GameReviewsHub is your go-to platform for unbiased reviews, the
                latest gaming news, and community discussions. We bring the
                gaming universe to your fingertips!
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/allReview">All Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/addReview">Add Review</NavLink>
                </li>
                <li>
                  <NavLink to="/myReview">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/gameWatchList">WatchList</NavLink>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Subscribe</h2>
              <p className="text-sm mb-4">
                Stay updated with the latest gaming trends, news, and reviews.
                Subscribe to our newsletter!
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 "
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/pritom.chakma.716/"
              className="text-gray-400 text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/" className="text-gray-400 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/PritomChakma"
              className="text-gray-400 text-xl"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-400 text-xl"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 GameReviewsHub. All Rights Reserved</p>
            <p>Designed with by Pritom</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
