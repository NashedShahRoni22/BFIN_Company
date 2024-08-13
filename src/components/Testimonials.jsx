import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      reviewText:
        "BFIN IT Company exceeded our expectations with their outstanding web development services. The team was professional, efficient, and delivered a flawless product.",
      reviewerName: "Emily Clark",
      reviewProfession: "Project Manager, Tech Innovators",
      reviewerImage: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      reviewText:
        "The custom software solutions provided by BFIN IT Company have streamlined our operations significantly. Their attention to detail and client needs is unmatched.",
      reviewerName: "John Davis",
      reviewProfession: "Operations Director, Global Logistics",
      reviewerImage: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      reviewText:
        "Working with BFIN IT Company was a pleasure. Their expertise in UI/UX design transformed our application, making it more user-friendly and visually appealing.",
      reviewerName: "Sarah Thompson",
      reviewProfession: "Product Manager, FinTech Solutions",
      reviewerImage: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      reviewText:
        "The team at BFIN IT Company was incredibly responsive and delivered our project on time. Their backend development skills are top-notch, ensuring a robust and secure system.",
      reviewerName: "Michael Lee",
      reviewProfession: "CTO, E-Commerce Inc.",
      reviewerImage: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      reviewText:
        "BFIN IT Company's cybersecurity solutions have greatly enhanced our website's protection. They offer real-time monitoring and proactive threat detection, which is invaluable to us.",
      reviewerName: "Olivia Martinez",
      reviewProfession: "IT Security Manager, SafeNet Corp",
      reviewerImage: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      reviewText:
        "We’re thrilled with the custom e-commerce platform developed by BFIN IT Company. Their team created a seamless and intuitive shopping experience for our customers.",
      reviewerName: "Daniel Green",
      reviewProfession: "CEO, Fashion Hub",
      reviewerImage: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      reviewText:
        "The SaaS product BFIN IT Company built for us has been a game-changer. It’s reliable, scalable, and perfectly tailored to our business needs.",
      reviewerName: "Laura Wilson",
      reviewProfession: "Founder, HealthTech Startup",
      reviewerImage: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
      reviewText:
        "BFIN IT Company provided exceptional support and maintenance for our website. Their proactive approach ensures our site is always up-to-date and secure.",
      reviewerName: "James Brown",
      reviewProfession: "Marketing Director, Retail Ventures",
      reviewerImage: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h2 className="text-2xl md:text-4xl text-primary font-extrabold text-center">
        Hear what our users have to say about us.
      </h2>

      <div className="mt-10 md:mt-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        //   pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="flex flex-col gap-5 border-2 border-primary p-8 rounded-xl shadow-xl">
                <div className="flex gap-1.5">
                  <BsStarFill className="text-orange-600" />
                  <BsStarFill className="text-orange-600" />
                  <BsStarFill className="text-orange-600" />
                  <BsStarFill className="text-orange-600" />
                  <BsStarHalf className="text-orange-600" />
                </div>
                <p className="md:text-xl">{testimonial.reviewText}</p>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-xl font-semibold">{testimonial.reviewerName}</h5>
                    <h5>{testimonial.reviewProfession}</h5>
                  </div>
                  <img
                    className="h-16 rounded-full"
                    src={testimonial.reviewerImage}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
