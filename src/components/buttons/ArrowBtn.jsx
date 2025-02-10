import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ArrowBtn({ to, label }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center rounded bg-primary px-6 py-3 font-medium text-white shadow"
    >
      <span className="flex items-center px-3">
        <span className="transition-transform duration-300 group-hover:-translate-x-2">
          {label}
        </span>
      </span>
      <AiOutlineArrowRight className="-ml-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
    </Link>
  );
}
