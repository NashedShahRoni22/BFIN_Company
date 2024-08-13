import React from "react";
import question from "../assets/question.png";
import arrow from "../assets/arrow.png";
import { MdArrowOutward } from "react-icons/md";

export default function Question() {
  return (
    <section className="relative mx-5 md:container md:mx-auto mb-10 md:mb-20 p-10 md:p-20 grid gap-8 md:grid-cols-2 md:gap-16 md:items-center border-2 border-primary rounded-xl shadow-xl">
      <div className="flex flex-col gap-4 items-center">
        <h5 className="text-2xl md:text-4xl font-semibold text-primary">Have more questions</h5>
        <p>
          If you still can’t find the answer you’re looking for, let we help
          you.
        </p>
        <button className="px-6 py-3 bg-secondary font-semibold rounded shadow w-fit flex items-center gap-4 group md:hover:scale-110 duration-300 ease-linear">
          <span className="md:text-xl">Contact</span>
          <MdArrowOutward className="md:text-xl group-hover:rotate-45 duration-300 ease-linear" />
        </button>
      </div>
      <div className="">
        <img src={question} alt="" />
      </div>
      <img className="hidden md:block absolute left-0 bottom-0" src={arrow} alt="" />
    </section>
  );
}
