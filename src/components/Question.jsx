import question from "../assets/home/question.png";
import arrow from "../assets/arrow.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Question() {
  return (
    <section className="relative mx-5 mb-10 grid gap-8 rounded-xl border-2 border-primary pt-10 shadow-xl md:container md:mx-auto md:mb-20 md:grid-cols-2 md:items-center md:gap-16 md:pt-20">
      <div className="flex flex-col items-center gap-4 p-8">
        <h5 className="text-center text-2xl font-semibold text-primary md:text-4xl">
          Have more questions
        </h5>
        <p className="text-center">
          If you still can’t find the answer you’re looking for, let we help
          you.
        </p>
        <Link
          to={"/contact"}
          className="group flex w-fit items-center gap-4 rounded bg-primary px-6 py-3 font-semibold text-white shadow duration-300 ease-linear md:hover:scale-110"
        >
          <span className="md:text-xl">Contact</span>
          <MdArrowOutward className="duration-300 ease-linear group-hover:rotate-45 md:text-xl" />
        </Link>
      </div>
      <div className="">
        <img src={question} alt="" loading="lazy" />
      </div>
      <img
        className="absolute bottom-0 left-0 hidden md:block"
        src={arrow}
        alt=""
        loading="lazy"
      />
    </section>
  );
}
