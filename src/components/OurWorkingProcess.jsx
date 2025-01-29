export default function OurWorkingProcess() {
  const works = [
    {
      title: "R&D and Intensive Research",
      desc: "We conduct deep research to innovate and enhance digital security. Our experts analyze threats, ensuring cutting-edge solutions. Every discovery strengthens our robust platform.",
    },
    {
      title: "Development",
      desc: "Our skilled team crafts secure, scalable solutions tailored to your needs. We focus on performance, reliability, and seamless integration within the Bfinit ecosystem.",
    },
    {
      title: "Implementation or Test Execution",
      desc: "Rigorous testing ensures every feature functions flawlessly. We simulate real-world scenarios, refining security protocols before deployment to maintain top-tier performance.",
    },
    {
      title: "Product Launch and Customer Support",
      desc: "From launch to ongoing support, we prioritize user satisfaction. Our team offers 24/7 assistance, ensuring smooth experiences and top-notch security for all clients.",
    },
  ];
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      <h5 className="text-center text-2xl font-extrabold text-primary md:text-4xl">
        Our Working Process
      </h5>
      <p className="mt-5 text-center md:mt-10 md:text-2xl">
        Discover what sets this apart as the market&apos;s easiest and most
        powerful video interviewing platform, and why hiring managers
        consistently choose us over the competition
      </p>
      <div className="mt-10 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {works.map((work, i) => (
          <div
            key={i}
            className={`group flex flex-col gap-2.5 rounded-xl border border-primary p-5 duration-300 ease-linear hover:bg-primary hover:text-white`}
          >
            <h5 className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-white duration-300 ease-linear group-hover:bg-white group-hover:text-primary md:text-4xl">
              {i + 1}
            </h5>
            <h2 className="mt-5 text-xl font-extrabold md:text-2xl">
              {work.title}
            </h2>
            <p className="mt-2.5">{work.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
