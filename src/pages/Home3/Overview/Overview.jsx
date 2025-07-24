import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from "../../../shared/Container";
import { sliderData } from "../../../data/sliderData";
import "swiper/css";

const subTitles = [
  "Sell online and in person.",
  "Sell locally and globally.",
  "Sell direct and wholesale.",
  "Sell on desktop and mobile.",
];

export default function Overview() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const swiperRef = useRef(null);

  const groupSize = 3; // each group has 3 slides
  const totalGroups = Math.ceil(sliderData.length / groupSize);

  return (
    <section className="py-10 md:py-24">
      <Container>
        <h2 className="mb-8 font-sora text-3xl font-semibold md:mb-10 md:text-[54px]">
          The one commerce platform behind it all
        </h2>

        <div className="mb-8 space-x-1 md:mb-16">
          {subTitles.map((subTitle, i) => (
            <span
              key={i}
              onClick={() => {
                const totalGroups = Math.ceil(sliderData.length / 3);
                const groupIndex = (i + 1) % totalGroups;
                swiperRef.current?.slideTo(groupIndex * 3);
              }}
              className={`cursor-pointer bg-gradient-to-r bg-clip-text bg-left text-5xl text-transparent transition-all duration-300 ease-linear hover:from-[#2D67B2] hover:via-[#00D492] hover:to-[#31C5F4] hover:bg-[length:200%_100%] hover:bg-right ${
                activeGroupIndex === i
                  ? "from-[#2D67B2] via-[#00D492] to-[#31C5F4]"
                  : "from-gray-700 via-gray-700 to-gray-700"
              }`}
            >
              {subTitle}
            </span>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            const groupIndex = Math.floor(realIndex / groupSize);
            const shiftedIndex = (groupIndex - 1 + totalGroups) % totalGroups;
            setActiveGroupIndex(shiftedIndex);
          }}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {sliderData.map((slider) => (
            <SwiperSlide
              key={slider.id}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <div className="w-full overflow-hidden rounded-lg shadow-sm">
                <img
                  src={slider.img}
                  alt="bfin ecommerce dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
