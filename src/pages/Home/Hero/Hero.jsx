import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {carouselData.map((data, i) => (
          <SwiperSlide
            key={i}
            // style={{ background: data.bgColor }}
            className="h-full w-full px-5 py-10 md:py-20"
          >
            <div className="flex flex-col items-center justify-between gap-8 md:container md:mx-auto md:flex-row md:gap-16">
              {/* Left Side Details Container */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-semibold leading-tight">
                  {data.title}
                </h1>
                <p className="mb-10 mt-6">{data.subTitle}</p>
                <Link
                  to={data.link}
                  className="rounded bg-[#186bb5] px-5 py-2.5 text-lg font-medium text-white shadow transition-all duration-200 ease-linear hover:bg-[#145d9c]"
                >
                  {data.btnText}
                </Link>
              </div>
              {/* Right Side Image Container */}
              <div className="flex items-center justify-center md:w-1/2">
                <img
                  src={data.img}
                  alt=""
                  loading="lazy"
                  className="h-[355px] w-full rounded-lg object-cover md:h-[600px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
