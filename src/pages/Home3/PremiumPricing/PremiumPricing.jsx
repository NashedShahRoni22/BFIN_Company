import { useState } from "react";
import {
  LuCheck,
  LuArrowRight,
  LuServer,
  LuShield,
  LuZap,
  LuCrown,
  LuChevronDown,
  LuGift,
} from "react-icons/lu";
import Container from "../../../shared/Container";
import bonusProducts from "../../../data/bonusProduct";
import { ecompricingPlan } from "../../../data/ecomPricingPlan";
import { Link } from "react-router-dom";

const PremiumPricing = () => {
  const [expandedPlanId, setExpandedPlanId] = useState(null);

  const toggleFeatures = (id) => {
    setExpandedPlanId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-10">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-center rounded-full bg-gray-900 p-1">
              <LuZap className="h-4 w-4 text-blue-500" />
            </div>
            <p className="text-gray-800">Enterprise Solutions</p>
          </div>
          <h2 className="text-center font-sora text-3xl font-bold text-dark md:text-4xl">
            For Brands That Need Full Control & Scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover powerful hosting and tailored features built for
            high-volume businesses like yours.
          </p>
        </div>

        {/* Horizontal Pricing Cards */}
        <div className="space-y-10 md:space-y-20">
          {ecompricingPlan.slice(4, 6).map((plan, index) => {
            const isExpanded = expandedPlanId === plan.id;
            const featuresToShow = isExpanded
              ? plan.features
              : plan.features.slice(0, 8);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300`}
              >
                <div
                  className={`grid lg:grid-cols-2 ${isReversed ? "lg:grid-cols-2" : ""}`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img
                        src={plan.image}
                        alt={`${plan.name} illustration`}
                        className="h-full w-full object-cover"
                      />

                      {plan.id === "premium" ? (
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-primary/25 to-transparent"></div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-600/10 to-transparent">
                          {" "}
                        </div>
                      )}

                      {/* Floating Icon */}
                      <div className="absolute left-6 top-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm">
                          {plan.id === "premium" ? (
                            <LuServer className="h-8 w-8 text-white" />
                          ) : (
                            <LuShield className="h-8 w-8 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-8 lg:p-12 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="mb-2 flex flex-col">
                        {plan.id === "enterprise" && (
                          <div className="absolute right-6 top-6 z-10">
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
                              <LuCrown className="h-4 w-4" />
                              Most Popular
                            </span>
                          </div>
                        )}

                        {/* Label */}
                        <div
                          className={`inline-flex w-fit rounded-md bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600`}
                        >
                          {plan.label}
                        </div>

                        <h3 className="mt-4 text-xl font-semibold">
                          {plan.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {plan.detail}
                      </p>

                      {/* Pricing */}
                      <div className="mt-6">
                        <div className="mb-2">
                          <span className="text-3xl font-bold">
                            {plan.price || "Custom Pricing"}
                          </span>
                          {plan.price && (
                            <span className="text-sm text-gray-600">
                              {" "}
                              /year
                            </span>
                          )}
                        </div>
                        {plan.monthly && (
                          <p className="text-sm text-gray-600">
                            {plan.monthly} /month
                          </p>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={plan?.url ? plan.url : "/"}
                      target="_blank"
                      className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ease-linear hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        plan.id === "enterprise"
                          ? "bg-primary text-white hover:bg-blue-700 focus:ring-blue-500"
                          : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <LuArrowRight className="h-5 w-5" />
                      </span>
                    </Link>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gray-200"></div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="mb-4 text-sm font-medium text-gray-900">
                        What&apos;s included:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {featuresToShow.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700"
                          >
                            <LuCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Show More/Less */}
                      {plan.features.length > 6 && (
                        <button
                          onClick={() => toggleFeatures(plan.id)}
                          className={`mt-4 flex items-center gap-2 text-sm font-medium focus:outline-none ${isExpanded ? "text-gray-500 hover:text-gray-700" : "text-primary hover:text-blue-700"}`}
                        >
                          <span>
                            {isExpanded
                              ? "Show less"
                              : `Show ${plan.features.length - 6} more features`}
                          </span>
                          <LuChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Bonus Products */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex gap-1.5 text-primary">
                          <LuGift className="mt-0.5 text-base" />
                          <span className="text-sm font-semibold">
                            {plan.freeProductsIncluded}
                          </span>
                        </div>
                      </div>

                      <p className="mb-3 text-xs leading-relaxed text-gray-500">
                        * Free product is valid for the duration of your
                        e-commerce plan.
                      </p>

                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <h5 className="mb-2.5 text-xs font-medium uppercase tracking-wide text-gray-700">
                          Available Products:
                        </h5>
                        <div className="space-y-2">
                          {(plan.id === "premium"
                            ? bonusProducts.slice(0, 5)
                            : bonusProducts
                          ).map((item, idx) => (
                            <div
                              key={idx}
                              className="group flex items-center gap-2.5"
                            >
                              {/* Logo and check */}
                              <div className="flex items-center gap-2">
                                <img
                                  src={item.logo}
                                  alt={`${item.name} logo`}
                                  className="h-5 w-5 rounded object-contain"
                                />
                              </div>

                              {/* Product details */}
                              <div className="flex min-w-0 flex-1 items-center justify-between">
                                <div className="min-w-0 flex-1">
                                  <span className="block truncate text-sm font-medium text-gray-900">
                                    {item.name}
                                  </span>
                                  <span className="block truncate text-xs text-gray-500">
                                    {item.description}
                                  </span>
                                </div>
                                <div className="ml-2 whitespace-nowrap text-xs font-semibold text-primary">
                                  {item.price}
                                  <span className="text-gray-400">/yr</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PremiumPricing;
