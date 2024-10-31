import React from "react";
import globalImg from "../assets/global.png";
import paymentImg from "../assets/payment.png";
import plannerImg from "../assets/planner.png";
import reportImg from "../assets/report.png";
import supportImg from "../assets/support.png";
import trustedImg from "../assets/trusted.png";

export default function Businessproof() {
  const items = [
    {
      image: globalImg,
      title: "Global community",
      desc: "Become part of a thriving global community, connecting with like-minded individuals from around the world. Share experiences, ideas, and insights that transcend borders.",
    },
    {
      image: plannerImg,
      title: "Easy-to-use planner",
      desc: "Our user-friendly planner is designed to simplify your life. Whether you're organizing your personal schedule or managing a complex project",
    },
    {
      image: reportImg,
      title: "Automated reports",
      desc: "Say goodbye to manual data crunching. Our automated reporting system streamlines the process of gathering and analyzing data.",
    },
    {
      image: trustedImg,
      title: "Trusted Secure",
      desc: "Trust is at the core of our platform. We prioritize the security and confidentiality of your information. No more wasted hours on tedious number-crunching tasks.",
    },
    {
      image: paymentImg,
      title: "Automatic payment",
      desc: "Seamlessly handle financial transactions through our automatic payment system. Our system takes care of it all, ensuring your financial commitments are met promptly and without hassle.",
    },
    {
      image: supportImg,
      title: "24/7 Support",
      desc: "We understand that issues and questions don't always arise during regular working hours. That's why our 24/7 support team is here for you, providing assistance at any time of day or night.",
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
      {items.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-xl group hover:bg-primary hover:text-white ease-linear duration-300">
          <img src={item.image} alt="" />
          <h5 className="mt-5 text-[20px] md:text-[26px] font-semibold text-primary group-hover:text-white ease-linear duration-300">
            {item.title}
          </h5>
          <p className="mt-2.5 text-[12px] md:text-[16px]">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
