import React from "react";

export default function OurWorkingProcess() {
  const works = [
    {
      title: "Requirement Analysis",
      desc: "Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris risus porta velitn platform.",
    },
    {
      title: "Development",
      desc: "Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris risus porta velitn platform.",
    },
    {
      title: "Implementation or Test Execution",
      desc: "Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris risus porta velitn platform.",
    },
    {
      title: "Product Launch and customer support",
      desc: "Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris risus porta velitn platform.",
    },
  ];
  return (
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h5 className="text-2xl md:text-4xl text-primary font-extrabold text-center">
        Our Working Process
      </h5>
      <p className="md:text-2xl text-center mt-5 md:mt-10">
        Discover what sets this apart as the market's easiest and most powerful
        video interviewing platform, and why hiring managers consistently choose
        us over the competition
      </p>
      <div className="mt-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {works.map((work, i) => (
          <div
            key={i}
            className={`p-8 border border-primary rounded-xl flex flex-col gap-2.5 group hover:bg-primary hover:text-white ease-linear duration-300`}
          >
            <h5 className="text-2xl md:text-4xl bg-primary group-hover:bg-white w-12 h-12 rounded-full flex justify-center items-center text-white group-hover:text-primary ease-linear duration-300">
              {i + 1}
            </h5>
            <h2 className="text-xl md:text-2xl font-extrabold">{work.title}</h2>
            <p>{work.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
