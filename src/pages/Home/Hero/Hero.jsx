import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { carouselData } from "../../../data/carouselData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Custom Swiper Navigation style
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero-container" className="relative">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {carouselData.map((data, i) => (
          <SwiperSlide
            key={i}
            style={{ background: data.bgColor }}
            className="px-5 py-10 h-full w-full md:py-20"
          >
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16 md:container md:mx-auto">
              {/* Left Side Details Container */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-semibold leading-tight">
                  {data.title}
                </h1>
                <p className=" mt-6 mb-10">{data.subTitle}</p>
                <Link
                  to={data.link}
                  className="px-5 py-2.5 rounded shadow bg-[#186bb5] text-lg text-white font-medium transition-all duration-200 ease-linear hover:bg-[#145d9c]"
                >
                  {data.btnText}
                </Link>
              </div>
              {/* Right Side Image Container */}
              <div className="md:w-1/2 flex items-center justify-center">
                <img
                  src={data.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full max-w-md object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
