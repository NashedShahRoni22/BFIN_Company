import iDistributorAffiliationImage from "../../../assets/DistributorAffiliation.jpg";

const DistributorAffiliation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 rounded-lg shadow-md md:container md:mx-auto">
      <div className="max-w-xl space-y-6 md:w-2/3">
        <h2 className="text-3xl font-semibold text-gray-800">Distributions Affiliation</h2>
        <p className="text-lg text-gray-600">
          Become a distributor with <strong>BFinit</strong> and expand your
          business with our trusted hosting services. Join us and start earning
          by offering high-quality, scalable solutions to your clients.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow">
            Join as a Distributor
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/3">
        <img
          src={iDistributorAffiliationImage}
          alt="Distribute Hosting Services"
        />
      </div>
    </div>
  );
};

export default DistributorAffiliation;
