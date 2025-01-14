import SectionContainer from "../../../shared/SectionContainer";
import overviewImg from "../../../assets/reseller/overview.jpg";

export default function Overview() {
  return (
    <SectionContainer flex="flex">
      <div className="w-full md:w-1/2">
        <img
          src={overviewImg}
          alt=""
          loading="lazy"
          className="w-full h-fit  rounded-bl-[116px] rounded-tr-[116px] rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">
          Shape Your Earnings, <br /> Your Way
        </h2>
        <p className="text-balance font-medium">
          Unlike other programs that limit your earnings, we empower you to set
          your own margins. You decide how much you make on each product, giving
          you the flexibility and control to maximize your profits.
        </p>
      </div>
    </SectionContainer>
  );
}
