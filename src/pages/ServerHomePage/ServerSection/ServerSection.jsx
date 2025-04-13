import { Link } from "react-router-dom";
import reliableBg from "../../../assets/server-home/reliable-bg.jpg";

export default function ServerSection() {
  return (
    <div className="text-primary grid grid-cols-1 gap-8 px-5 py-10 md:container md:mx-auto md:grid-cols-2 md:px-0 md:py-20">
      <div className="relative max-h-96">
        <img
          src={reliableBg}
          alt="relaible"
          className="rounded-2xl object-cover"
        />
      </div>
      <div>
        <h2 className="font-urbanist text-4xl font-bold">
          Dedicated & Virtual Servers You Can Rely On
        </h2>
        <p className="mt-4 text-lg">
          At BFINIT, we specialize in providing high-performance dedicated and
          virtual servers designed for reliability and scalability. Whether
          you’re running a small project or a large-scale operation, we offer
          customizable server options with powerful hardware, advanced security,
          and full OS control. Choose from a variety of configurations to meet
          your needs, backed by our experienced support team to ensure your
          server is always running at peak performance.
        </p>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            to="/hosting-products/2"
            className="mt-4 w-full rounded-full border px-5 py-2 font-medium transition hover:bg-gray-200 md:w-fit"
          >
            Browse Virtual Servers
          </Link>
          <Link
            to="/hosting-products/1"
            className="mt-4 w-full rounded-full border px-5 py-2 font-medium transition hover:bg-gray-200 md:w-fit"
          >
            Browse Dedicated Servers
          </Link>
        </div>
      </div>
    </div>
  );
}
