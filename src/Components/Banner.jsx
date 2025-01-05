import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/car.jpeg";
import banner2 from "../assets/clash.jpg";
import banner3 from "../assets/wild.webp";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Adjusted for slower autoplay
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="bg-opacity-40 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                    Asphalt 9: Legends
                  </h1>
                  <p className="mb-6 text-lg">
                    An arcade racing experience, featuring thrilling fast-paced
                    gameplay with stunning graphics and exciting car races.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="bg-opacity-40 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                    Clash of Clans
                  </h1>
                  <p className="mb-6 text-lg">
                    A free-to-play strategy game with base-building and
                    strategic combat, where you lead your village to victory.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="bg-opacity-50 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                    The Legend of Zelda: Breath of the Wild
                  </h1>
                  <p className="mb-6 text-lg">
                    A groundbreaking open-world adventure, where you explore,
                    battle, and survive in a vast, beautiful world.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
