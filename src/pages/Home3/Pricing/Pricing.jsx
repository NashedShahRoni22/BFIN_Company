import { useState } from "react";
import { ecompricingPlan } from "../../../data/ecomPricingPlan";
import Container from "../../../shared/Container";
import EcomPricingCard2 from "../../../components/Cards/EcomPricingCard2";
import { Link } from "react-router-dom";
import { LuGift } from "react-icons/lu";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 md:py-20">
      <Container>
        {/* section title container */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="font-sora text-3xl font-bold text-dark/50 md:text-4xl">
              Pricing
            </h2>
            <h2 className="mt-1 font-sora text-3xl font-bold text-dark md:text-4xl">
              Plans that grow with you
            </h2>
          </div>

          <Link
            to="/bfinit-ecomerce-platform"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary"
          >
            View All Pack
          </Link>
        </div>

        {/* tab button */}
        <div className="mt-12 flex justify-center font-sora">
          <div className="space-x-2 overflow-hidden rounded-[10px] border border-gray-300 bg-background p-1">
            <button
              onClick={() => setActiveTab(0)}
              className={`rounded-md px-4 py-0.5 ${activeTab === 0 && "bg-secondary"}`}
            >
              Billed monthly
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`rounded-md px-4 py-0.5 ${activeTab === 1 && "bg-secondary"}`}
            >
              Billed yearly
            </button>
          </div>
        </div>

        <p className="mt-2.5 text-center text-lg text-gray-600">
          Each pack includes exclusive{" "}
          <a
            href="#free-tools"
            className="inline-flex items-center gap-1 text-primary underline"
          >
            Bonus Gifts <LuGift className="shrink-0" />
          </a>
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 lg:gap-6">
          {ecompricingPlan.map((plan) => (
            <EcomPricingCard2 key={plan.id} plan={plan} activeTab={activeTab} />
          ))}
        </div>
      </Container>
    </section>
  );
}
