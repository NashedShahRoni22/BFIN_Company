import { gdprFeats } from "../../../data/gdprFeats";

const Gdpr = () => {
  return (
    <div className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20">
      <h2 className="text-center font-montserrat text-2xl font-bold md:text-4xl">
        <span className="text-primary">GDPR Compliant</span> - Hosting & Data
        Protection
      </h2>
      <p className="mt-6 text-center text-lg md:text-xl">
        Secure, Redundant and Compliant with Global Standards
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {gdprFeats.map((feature, index) => (
          <div key={index} className="rounded-lg border bg-white p-4">
            <img
              src={feature.icon}
              alt="icons"
              loading="lazy"
              className="size-12"
            />
            <h3 className="mt-5 text-xl font-semibold md:text-2xl">
              {feature.title}
            </h3>
            <p className="mt-2.5 text-balance text-sm text-gray-600 md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gdpr;
