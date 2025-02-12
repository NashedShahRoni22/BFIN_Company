import { BsCheck } from "react-icons/bs";
import { dataCenterSections } from "../../../data/dataCenterSections";

export default function HighlightedFeats() {
  return (
    <>
      {dataCenterSections.map((data, i) => (
        <div
          key={i}
          className={`flex flex-col gap-8 py-10 font-roboto md:items-center md:gap-16 md:py-20 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="w-fit rounded-full bg-[#EDF6FD] px-3 py-1 font-semibold text-primary">
              {data.tagLine}
            </p>
            <h2 className="mt-4 text-3xl font-bold">{data.title}</h2>
            {data?.descriptions && (
              <div className="mt-6 space-y-2.5">
                {data?.descriptions?.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
            <ul className="mt-4 space-y-0.5 text-sm">
              {data?.features?.map((feat, i) => (
                <li key={i} className="flex gap-0.5">
                  <BsCheck className="min-w-fit text-xl text-primary" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={data.image}
              alt="Scalable Data Center"
              loading="lazy"
              className="h-[200px] w-full rounded-xl object-cover shadow-lg md:h-[352px]"
            />
          </div>
        </div>
      ))}
    </>
  );
}
