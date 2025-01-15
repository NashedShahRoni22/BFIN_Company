export default function Guidelines({ sectionRef }) {
  const steps = [
    {
      title: "Step 1: Sales and Marketing Analysis",
      subtitle:
        "Define your audience, understand customer needs, segment your market, and analyze competitors using actionable tools.",
      videoSrc: "https://www.youtube.com/embed/9-qeLwCJkcg?si=QH-1mngJDortLzJI",
    },
    {
      title: "Step 2: Compliance Regulations",
      subtitle:
        "Understand and implement essential compliance regulations for your business setup.",
      videoSrc: "https://www.youtube.com/embed/XPGkp3q2pzI?si=mWVsKc8OQclt_Gvw",
    },
    {
      title: "Step 3: Selecting the Perfect Name",
      subtitle: "Choose a name that resonates with your brand and audience.",
      videoSrc: "https://www.youtube.com/embed/gSp2VBcvrAs?si=6t2Ip6HS940FxWH_",
    },
    {
      title: "Step 4: Generating Winning Product Ideas",
      subtitle:
        "Create innovative products that address your customers’ needs.",
      videoSrc: "https://www.youtube.com/embed/w-1cbJNZCsY?si=IQX4GbzqmqgQ5N-o",
    },
    {
      title: "Step 5: Managing Capital and Costs",
      subtitle: "Effectively allocate resources and manage costs.",
      videoSrc: "https://www.youtube.com/embed/tHKD_xX_hJE?si=e05Sr5RSE5fPB74m",
    },
    {
      title: "Step 6: Mastering Client Support",
      subtitle:
        "Provide exceptional support to retain and grow your customer base.",
      videoSrc: "https://www.youtube.com/embed/DqaAgSOocME?si=TGMUB1YV-pH2WAO9",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="mx-5 md:container md:mx-auto py-20 md:py-20"
    >
      <h2 className="text-3xl mt-2 font-bold text-center md:text-4xl">
        Why This Guide Matters
      </h2>
      <p className="my-6 text-center leading-relaxed text-balance text-lg">
        Learn the step-by-step process to start, manage and grow your E-Commerce
        store
      </p>

      <div className="mt-20 space-y-32">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col gap-8 md:gap-16 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-1.5">{step.subtitle}</p>
            </div>
            <div className="w-full md:w-1/2">
              <iframe
                src={step.videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="aspect-video w-full rounded-lg"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
