import dataCenterImg from "../../../assets/data-center/data-center.webp";

export default function Hero() {
  return (
    <section className="mx-5 py-5 md:container md:mx-auto md:py-20">
      <h1 className="text-center text-3xl font-bold text-primary md:text-5xl">
        BFINIT - Secure, Scalable and Redundant
      </h1>
      <p className="mt-4 text-center text-lg">
        Safeguard Your Servers or Hosting Space Across Multiple Locations for
        Unmatched Protection.
      </p>

      <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">
            Our Data Center&apos;s Mission
          </h2>
          <p className="mt-4">
            Bfinit - Next-Gen Data Center Solutions for Speed, Reliability &
            Security, Backed by Multi-Site Infrastructure and Secure Data
            Redundancy for Unmatched Protection.
          </p>
          <p className="mt-4">
            Our state-of-the-art facilities ensure top-tier security, constant
            uptime, and resilience against unforeseen circumstances, making us a
            trusted partner in safeguarding your critical data assets.
          </p>
        </div>
        <div className="h-[390px] w-full md:w-1/2">
          <img
            src={dataCenterImg}
            alt="Data Center"
            className="h-full w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
