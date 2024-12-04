import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner2 from "../assets/ban10.jpg";
import banner3 from "../assets/ban11.jpg";
import banner1 from "../assets/wild.webp";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div className=" ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              className="hero w-full h-[470px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="bg-opacity-45 hero-overlay"></div>
              <div className="hero-content text-neutral-content ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero w-full h-[470px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="bg-opacity-45 hero-overlay"></div>
              <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero w-full h-[470px] bg-cover bg-center "
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="bg-opacity-30 hero-overlay"></div>
              <div className="hero-content text-neutral-content ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide><img className='w-full h-[470px]' src={slide4} alt=""/></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
