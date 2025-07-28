import {
  FaShareAlt,
  FaStore,
  FaComments,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { LuArrowRight, LuGift } from "react-icons/lu";
import Container from "../../../shared/Container";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaUsers className="text-xl" />,
    title: "Social Networking",
    description:
      "Connect, chat, and engage with friends and communities on Sosay.",
  },
  {
    icon: <FaComments className="text-xl" />,
    title: "Content Creation",
    description: "Share videos, stories, and live streams with your audience.",
  },
  {
    icon: <FaStore className="text-xl" />,
    title: "E-commerce Hub",
    description:
      "Sell products directly through your Sosay profile with zero hassle.",
  },
  {
    icon: <FaShareAlt className="text-xl" />,
    title: "Crypto Integration",
    description:
      "Manage, trade, and transact with cryptocurrencies seamlessly.",
  },
];

const SosayPromo = () => {
  return (
    <div className="bg-[#020617] py-10 text-white md:py-20">
      <Container>
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-secondary/10 bg-white/5 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm">
              <div className="items-center justify-center rounded-full bg-white/10 p-1">
                <LuGift className="size-4" />
              </div>
              <p>Social Commerce</p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-sora text-3xl font-bold md:text-4xl">
            Amplify Your Reach with Sosay
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-balance text-gray-600">
            Transform your store&apos;s visibility by leveraging our integrated
            social platform. Showcase products, engage with customers, and build
            your brand - all in one ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border border-secondary/10 bg-white/10 p-4 text-center shadow-sm transition-all hover:shadow-md`}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-secondary">
                {item.icon}
              </div>
              <h3 className="mt-4 text-balance text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-balance text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="https://sosay.org/"
            target="_blank"
            className="group flex items-center rounded-lg border border-transparent bg-primary px-6 py-3 font-medium text-white transition-all duration-300 ease-linear hover:bg-secondary hover:text-dark"
          >
            Start Sharing on Sosay
            <LuArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SosayPromo;
