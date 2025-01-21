import { ourBrands } from "../../../data/ourBrands";

export default function Hero() {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Explore Our BFINIT Services
      </h2>
      <p className="mt-6 text-balance text-center text-lg leading-relaxed">
        Discover solutions for security, payroll, accounting, social media and
        more.
      </p>

      {/* Services Card Container */}
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ourBrands.map((service, i) => (
          <div key={i} className="rounded border p-4">
            <img
              src={service.icon}
              alt={service.title}
              className="h-16 w-auto"
            />
            <h3 className="my-2 text-xl font-semibold">{service.title}</h3>
            <p className="mb-4">{service.details}</p>
            <a
              href={service.url}
              target="_blanck"
              className="text-sm font-medium text-primary transition-all duration-200 ease-linear hover:font-semibold"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
