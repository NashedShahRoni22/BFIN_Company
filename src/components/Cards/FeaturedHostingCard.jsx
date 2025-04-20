import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FeaturedHostingCard({ pack }) {
  return (
    <div
      className={`relative rounded-md shadow-md bg-white px-4 py-8 ${pack.mostPopular && "scale-y-105"}`}
    >
      {pack.mostPopular && (
        <p className="bg-primary absolute -top-[1px] right-0 rounded-bl-md px-4 py-1.5 text-sm font-semibold text-white">
          Most Popular
        </p>
      )}
      <h5 className="text-2xl font-bold">{pack.name}</h5>
      <p className="mt-1 text-sm">{pack.description}</p>
      <p className="mt-4">
        from $<span className="text-3xl font-extrabold">{pack.price}</span>
        /month
      </p>
      <p className="mt-1 text-sm font-semibold">
        + $0 Setup Fee & No Extra Renewal Charge
      </p>
      <Link
        to={pack.route}
        className={`border-primary text-primary mt-4 block rounded-full border-2 py-2 text-center font-bold transition-all duration-200 ease-linear ${pack.mostPopular ? "bg-primary text-white hover:border-transparent" : "hover:bg-neutral-200"}`}
      >
        Learn More
      </Link>
      <ul className="mt-8 space-y-1 text-sm">
        {pack.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-1.5 tracking-wider">
            <BsCheck2 className="text-accent min-w-fit text-lg" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}
