import digitaleconomyImg from "../assets/home/digital-economy.png";

export default function DigitalEconomy() {
  return (
    <section className="mx-5 flex flex-col gap-8 py-10 md:container md:mx-auto md:flex-row md:items-center md:gap-16 md:py-20">
      <div className="md:w-1/2">
        <img src={digitaleconomyImg} alt="" loading="lazy" className="" />
      </div>
      <div className="flex flex-col gap-8 md:w-1/2 md:gap-16">
        <h5 className="text-3xl font-extrabold text-primary md:text-5xl">
          We’re building business for your digital economy
        </h5>
        <p className="md:text-xl">
          We are building business, banking products and services to support the
          next generation of entrepreneurs. The world as we know it is no longer
          the same, and changes now occur in days and months, not years. Get
          started!
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-3xl font-extrabold text-primary md:text-5xl">
              100k
            </p>
            <p className="mt-2.5 text-xl font-semibold text-primary md:text-3xl">
              Customers
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary md:text-5xl">
              5+
            </p>
            <p className="mt-2.5 text-xl font-semibold text-primary md:text-3xl">
              Products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
