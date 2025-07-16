import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../shared/Container";
import "swiper/css";
import { sliderData } from "../../../data/sliderData";

const subTitles = [
  "Sell online and in person.",
  "Sell locally and globally.",
  "Sell direct and wholesale.",
  "Sell on desktop and mobile.",
];

export default function Overview() {
  return (
    <section className="-mt-11 min-h-screen rounded-t-[48px] bg-white py-10 md:py-24">
      <Container>
        <h2 className="mb-8 text-balance text-6xl md:mb-10">
          The one commerce platform behind it all
        </h2>

        <div className="mb-8 space-x-1 md:mb-16">
          {subTitles.map((subTitle, i) => (
            <span
              key={i}
              className={`via-emerald-400 bg-gradient-to-r bg-clip-text bg-left text-5xl font-light text-transparent transition-all duration-300 ease-linear hover:from-[#2D67B2] hover:via-[#00D492] hover:to-[#31C5F4] hover:bg-[length:200%_100%] hover:bg-right ${subTitles.length - 1 === i ? "from-[#2D67B2] via-[#00D492] to-[#31C5F4]" : "from-gray-700 via-gray-700 to-gray-700"}`}
            >
              {subTitle}
            </span>
          ))}
        </div>

        {/* swiper slider */}
        <div>
          <Swiper slidesPerView={3} className="mySwiper">
            {sliderData.map((slider) => (
              <SwiperSlide key={slider.id} className="h-64 w-full">
                <img
                  src={slider.img}
                  alt="bfin ecommerce dashboard"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
