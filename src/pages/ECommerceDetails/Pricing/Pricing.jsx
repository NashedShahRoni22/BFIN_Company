import { FaCheck } from "react-icons/fa";
import { ecommercePrice } from "../../../data/ecommercePrice";

export default function Pricing() {
  return (
    <section className="py-10 grid gap-5 md:py-20 md:grid-cols-2 lg:grid-cols-4">
      {ecommercePrice.map((price) => (
        <div
          key={price.id}
          className="flex flex-col justify-between gap-2.5 p-6 shadow rounded"
        >
          <h5 className="font-bold text-primary">{price.name}</h5>
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel_Inside_Logo_%282020%29.svg"
              alt=""
              className="h-[60px]"
            />
            <div>
              <p className="text-sm">Intel® Skylake i7-6700</p>
              <hr />
              <h5 className="font-semibold text-sm">
                Quad-Core, 4 x 4.0 GHz Turbo Shared
              </h5>
            </div>
          </div>

          <p className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">1 IP included</span>
          </p>
          <p className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">1 GBit/s</span>
          </p>
          <p className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">0 € setup fee</span>
          </p>
          <p className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">Easy to upgrade</span>
          </p>
        </div>
      ))}
    </section>
  );
}
