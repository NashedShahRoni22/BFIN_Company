// unchanged imports
import {
  LuCheck,
  LuArrowRight,
  LuServer,
  LuShield,
  LuZap,
  LuCrown,
  LuChevronDown,
} from "react-icons/lu";
import Container from "../../../shared/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ecompricingPlan } from "../../../data/ecomPricingPlan";
import { FaCheck } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import bonusProducts from "../../../data/bonusProduct";

const PremiumPricing = () => {
  const [expandedPlanId, setExpandedPlanId] = useState(null);
  const toggleFeatures = (id) => {
    setExpandedPlanId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Container>
      {/* Section heading */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-gray-200/50 bg-white px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
          <div className="items-center justify-center rounded-full bg-gray-900 p-1">
            <LuZap className="size-4 text-primary" />
          </div>
          <p className="text-gray-800">Enterprise Solutions</p>
        </div>
        <h2 className="font-sora text-3xl font-extrabold text-gray-900 md:text-4xl">
          For Brands That Need Full Control & Scale
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Discover powerful hosting and tailored features built for high-volume
          businesses like yours.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-y-10 lg:grid-cols-2 lg:gap-x-10">
        {ecompricingPlan.slice(4, 6).map((plan) => {
          const isExpanded = expandedPlanId === plan.id;
          const featuresToShow = isExpanded
            ? plan.features
            : plan.features.slice(0, 6);

          return (
            <div
              key={plan.id}
              className={`relative flex w-full flex-col rounded-3xl border p-6 shadow-sm ${
                plan.id === "enterprise"
                  ? "bg-dark text-white ring-gray-800"
                  : "border-gray-200 bg-white text-gray-900"
              } ${isExpanded ? "h-fit" : "h-full"}`}
            >
              {/* Most Popular Tag */}
              {plan.id === "enterprise" && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-md">
                    <LuCrown className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.id === "premium" ? (
                    <LuServer className="h-6 w-6 text-primary" />
                  ) : (
                    <LuShield className="h-6 w-6 text-primary" />
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                  {plan.detail}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-3xl font-bold">
                    {plan.price || "Custom"}
                  </span>
                  {plan.price && (
                    <span className="text-sm text-gray-400">/year</span>
                  )}
                </div>

                {plan.monthly && (
                  <p className="mt-1 text-sm text-gray-400">
                    {plan.monthly} /month
                  </p>
                )}
              </div>

              <Link
                to={plan?.url || "/"}
                target="_blank"
                className={`mt-6 inline-block w-full rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ease-linear hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.id === "enterprise"
                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                    : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
                  <LuArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Feature List */}
              <ul className="mt-8 space-y-3 text-sm leading-6">
                {featuresToShow.map((feature, index) => (
                  <li key={index} className="flex items-start gap-x-3">
                    <LuCheck className="mt-1 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}

                {isExpanded && (
                  <li>
                    <button
                      onClick={() => toggleFeatures(plan.id)}
                      className="text-sm font-medium text-gray-400 hover:text-gray-300"
                    >
                      Show less
                    </button>
                  </li>
                )}
              </ul>

              {/* Show More */}
              {!isExpanded && plan.features.length > 6 && (
                <button
                  onClick={() => toggleFeatures(plan.id)}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>{`Show ${plan.features.length - 6} more features`}</span>
                  <LuChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              <div className="my-6 h-px bg-gray-200 dark:bg-gray-700"></div>

              {/* Bonus Products */}
              {4 > 0 && (
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex gap-1.5 text-blue-600">
                      <FiGift className="mt-1 text-base" />
                      <span className="text-sm font-semibold">
                        {plan.freeProductsIncluded}
                      </span>
                    </div>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-gray-500">
                    * Free product is valid for the duration of your e-commerce
                    plan.
                  </p>

                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Available products:
                    </h4>
                    <div className="space-y-2">
                      {(plan.name === "Starter Pack"
                        ? bonusProducts.slice(0, 3)
                        : bonusProducts
                      ).map((item, index) => (
                        <div
                          key={index}
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
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PremiumPricing;
