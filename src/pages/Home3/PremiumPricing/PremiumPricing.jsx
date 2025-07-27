import {
  LuCheck,
  LuArrowRight,
  LuUsers,
  LuShield,
  LuZap,
  LuGlobe,
  LuClock,
  LuHeadphones,
  LuServer,
  LuDatabase,
} from "react-icons/lu";

const PremiumPricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Premium Plan */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="bg-blue-600 p-6 text-white">
              <div className="mb-2 flex items-center gap-2">
                <LuServer className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Premium Plan</h2>
              </div>
              <p className="mb-1 text-sm font-medium text-blue-100">
                High Capacity
              </p>
              <p className="mb-4 text-sm text-blue-100">
                Powerful hosting and large-scale ecommerce capacity for
                fast-growing enterprises.
              </p>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold">USD $594</span>
                <span className="text-sm text-blue-200">annually</span>
              </div>
              <div className="text-sm text-blue-100">USD $49.50 monthly</div>
            </div>

            <div className="p-6">
              <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
                Get Started
                <LuArrowRight className="h-4 w-4" />
              </button>

              {/* Key Specs */}
              <div className="mb-6 rounded-lg bg-gray-50 p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Stores:</span>
                    <span className="ml-1 font-semibold">4</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Products:</span>
                    <span className="ml-1 font-semibold">10,000</span>
                  </div>
                  <div>
                    <span className="text-gray-600">RAM:</span>
                    <span className="ml-1 font-semibold">32GB DDR4 ECC</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Storage:</span>
                    <span className="ml-1 font-semibold">500GB SSD</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-blue-600">
                  ✨ Choose 5 free products during checkout
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-gray-900">
                  What&apos;s Included:
                </h3>
                <div className="max-h-48 overflow-y-auto pr-2">
                  <ul className="space-y-2">
                    {[
                      "4 Ecommerce Store",
                      "10,000 Products Add Option",
                      "Pre-Built Templates",
                      "Fully Responsive Website for Any Device",
                      "32GB DDR4 ECC RAM",
                      "500GB SSD",
                      "Unlimited visits monthly",
                      "Unlimited bandwidth",
                      "Unlimited free SSL",
                      "Weekly backups",
                      "Enhance SEO Control",
                      "Market & Business Insights Analysis",
                      "Dedicated Blog Panel",
                      "Custom Branding Experience",
                      "Integrate your Own Payment Gateway",
                      "Free email",
                      "Advanced E-commerce Features to Boost Sales",
                      "Unlimited Revisions for Design",
                      "Unlimited Support",
                      "Free Hosting Setup",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <LuCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-green-600">
                  🎉 Buy 12 months or more and enjoy 3 months absolutely free!
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Pack */}
          <div className="relative overflow-hidden rounded-xl border-2 border-purple-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-purple-600 px-4 py-1 text-xs font-bold text-white">
                Most Popular
              </span>
            </div>

            <div className="bg-purple-600 p-6 text-white">
              <div className="mb-2 flex items-center gap-2">
                <LuShield className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Enterprise Pack</h2>
              </div>
              <p className="mb-1 text-sm font-medium text-purple-100">
                Custom Solution
              </p>
              <p className="mb-4 text-sm text-purple-100">
                Custom-built for scalable global brands needing full control,
                resources, and support.
              </p>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-sm text-purple-200">pricing</span>
              </div>
              <div className="text-sm text-purple-100">Contact for quote</div>
            </div>

            <div className="p-6">
              <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700">
                Contact Sales
                <LuArrowRight className="h-4 w-4" />
              </button>

              {/* Key Specs */}
              <div className="mb-6 rounded-lg bg-purple-50 p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Stores:</span>
                    <span className="ml-1 font-semibold">Unlimited</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Products:</span>
                    <span className="ml-1 font-semibold">Unlimited</span>
                  </div>
                  <div>
                    <span className="text-gray-600">RAM:</span>
                    <span className="ml-1 font-semibold">32GB DDR4 ECC</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Storage:</span>
                    <span className="ml-1 font-semibold">
                      2TB SSD + 2TB HDD
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-purple-600">
                  🎁 Free products based on custom plan
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-gray-900">
                  What&apos;s Included:
                </h3>
                <div className="max-h-48 overflow-y-auto pr-2">
                  <ul className="space-y-2">
                    {[
                      "Unlimited Ecommerce Websites",
                      "Unlimited Product Catalogs",
                      "Pre-Built Templates + Custom Layouts",
                      "Fully Responsive Across All Devices",
                      "32 GB DDR4 ECC RAM",
                      "2 x 1TB SATA III HDD + 2 x 1TB SSD Storage",
                      "Unlimited Monthly Visits",
                      "Unlimited Bandwidth",
                      "Unlimited SSL Certificates",
                      "Geo Redundant Backup Option",
                      "Advanced SEO Control and Schema Integration",
                      "Business Intelligence & Market Insights",
                      "Dedicated Blog Panel for Each Store",
                      "Full Branding Personalization",
                      "Custom Payment Gateway Integration",
                      "Free Domain(s) Included",
                      "Free Business Email",
                      "Enterprise-Grade Security with Bitss Cyber Protection",
                      "Unlimited Revisions and Scaling",
                      "Global Currency & Location Deployment Options",
                      "CDN Distribution Option for Speed & Reliability",
                      "Drag & Drop Website Builder",
                      "Free Hosting Setup and Maintenance",
                      "24/7 Priority Support",
                      "Contract Options: 3, 6, 12, or 24 Months",
                      "Dedicated SOHO 1230-T1 Fully Managed Server",
                      "Intel® Core™ E3-1230v6 Quad-Core (4 x 3.9 GHz Turbo)",
                      "1 IP Included (expandable to 4)",
                      "Local Backup Included",
                      "Managed by Bfinit – Updates, Patching, Monitoring",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <LuCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Need help choosing the right plan?
          </p>
          <button className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700">
            <LuHeadphones className="h-5 w-5" />
            Contact our sales team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPricing;
