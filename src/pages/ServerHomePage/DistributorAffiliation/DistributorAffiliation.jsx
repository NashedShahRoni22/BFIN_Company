import { Link } from "react-router-dom";
import iDistributorAffiliationImage from "../../../assets/server-home/affiliation.webp";

const DistributorAffiliation = () => {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg p-8 shadow-md md:container md:mx-auto md:flex-row">
      <div className="max-w-xl space-y-6 md:w-2/3">
        <h2 className="text-3xl font-semibold text-gray-800">
          Distributions Affiliation
        </h2>
        <p className="text-lg text-gray-600">
          Become a distributor with <strong>BFinit</strong> and expand your
          business with our trusted hosting services. Join us and start earning
          by offering high-quality, scalable solutions to your clients.
        </p>
        <div className="mt-8">
          <Link
            to={"/distributeurs-affiliation"}
            className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow"
          >
            Join as a Distributor
          </Link>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/3">
        <img
          src={iDistributorAffiliationImage}
          alt="Distribute Hosting Services"
          className="h-full max-h-[460px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default DistributorAffiliation;
