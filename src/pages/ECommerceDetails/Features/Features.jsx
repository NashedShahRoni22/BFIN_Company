import { ecommerceFeat } from "../../../data/ecommerceFeat";

export default function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-10">
      <h2 className="text-2xl text-center text-primary font-extrabold md:text-4xl">
        Innovative Features to Power Your Growth
      </h2>

      <div className="grid grid-cols-1 gap-8 md:py-20 md:grid-cols-3">
        {ecommerceFeat.map((feat) => (
          <div
            key={feat.id}
            className="bg-white p-5 rounded-xl shadow-xl group hover:bg-primary hover:text-white ease-linear duration-300"
          >
            <img src={feat?.icon} alt="" className="w-12" />
            <h5 className="mt-5 text-[20px] md:text-[26px] font-semibold text-primary group-hover:text-white ease-linear duration-300">
              {feat.name}
            </h5>
            <p className="mt-2.5 text-[12px] md:text-[16px]">{feat.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
