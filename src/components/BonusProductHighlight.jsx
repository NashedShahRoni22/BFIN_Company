import { FiBarChart2, FiGift } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const bonusProducts = [
  { name: "Bitss WAP", price: "€19.50" },
  { name: "Bitss C", price: "€6.99" },
  { name: "Bitss VWAR", price: "€4.99" },
  { name: "Omada HR 10", price: "€8.99" },
  { name: "Omada Clasico 25", price: "€10.99" },
];

const duration = [
  {
    duration: "3 Months",
    bonus: 1,
  },
  {
    duration: "6 Months",
    bonus: 2,
  },
  {
    duration: "12 Months",
    bonus: 4,
  },
  {
    duration: "24 Months",
    bonus: 5,
  },
];

export default function BonusProductHighlight() {
  return (
    <div className="px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">
        Get free tools like login guard, spam filter, malware shield & payroll
        software with hosting.
      </p>
      <h2 className="mt-4 flex items-center justify-center gap-2.5 text-center text-4xl font-bold">
        <FiGift className="text-3xl" />{" "}
        <span>Get Up to 5 FREE Bonus Products</span>
      </h2>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
        {/* Left: Bonus by Duration */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary-500/10 text-primary-600 flex h-8 w-8 items-center justify-center rounded-lg">
              <FiBarChart2 className="text-lg" />
            </div>
            <h3 className="text-primary-900 text-lg font-semibold">
              Free Product Tiers
            </h3>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-gray-100/50">
            {duration?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-semibold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.duration}</p>
                  <p className="text-sm text-gray-600">
                    {item.bonus} free{" "}
                    {item.bonus === 1 ? "product" : "products"}
                  </p>
                </div>
                <div className="text-primary-500 hidden text-xs font-medium sm:block">
                  +{item.bonus} {item.bonus === 1 ? "product" : "products"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bonus Products List */}
        <div className="flex-1 space-y-4">
          <h3 className="text-primary-900 text-base font-semibold">
            🎁 Available Bonus Products
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {bonusProducts.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-md bg-white p-3 shadow-sm ring-1 ring-gray-100"
              >
                <div className="bg-primary-100 text-primary-600 flex h-5 w-5 items-center justify-center rounded-full">
                  <FaCheck className="text-xs" />
                </div>
                <span className="text-primary-900 text-sm">
                  <span className="font-medium">{item.name}</span> –{" "}
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
