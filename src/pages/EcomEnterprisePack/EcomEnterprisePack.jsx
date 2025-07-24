import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaServer, FaShoppingCart } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { MdSecurity, MdSupport, MdSpeed } from "react-icons/md";
import bonusProducts from "../../data/bonusProduct";
import { getData } from "../../shared/GetData";

const dedicateServerProducts = [
  {
    id: 3,
    title: "Self Managed Server",
    description:
      "Perfect for technical teams who want full control over server management",
  },
  {
    id: 1,
    title: "Fully Managed Server",
    description:
      "We handle all server management, updates, and maintenance for you",
  },
];

const enterpriseFeatures = [
  {
    category: "E-commerce Features",
    icon: <FaShoppingCart className="text-2xl" />,
    features: [
      "Unlimited Ecommerce Websites",
      "Unlimited Product Catalogs",
      "Pre-Built Templates + Custom Layouts",
      "Fully Responsive Across All Devices",
      "Advanced SEO Control and Schema Integration",
      "Business Intelligence & Market Insights",
      "Dedicated Blog Panel for Each Store",
      "Full Branding Personalization",
      "Custom Payment Gateway Integration",
      "Free Domain(s) Included",
      "Free Business Email",
      "Drag & Drop Website Builder",
      "Global Currency & Location Deployment Options",
    ],
  },
  {
    category: "Performance & Security",
    icon: <MdSecurity className="text-2xl" />,
    features: [
      "Unlimited Monthly Visits",
      "Unlimited Bandwidth",
      "Unlimited SSL Certificates",
      "Geo Redundant Backup Option",
      "Enterprise-Grade Security with Bitss Cyber Protection",
      "CDN Distribution Option for Speed & Reliability",
      "Local Backup Included",
      "Managed Updates, Patching, Monitoring",
    ],
  },
  {
    category: "Support & Flexibility",
    icon: <MdSupport className="text-2xl" />,
    features: [
      "Unlimited Revisions and Scaling",
      "Free Hosting Setup and Maintenance",
      "24/7 Priority Support",
      "Contract Options: 3, 6, 12, or 24 Months",
      "Custom Solution for Global Brands",
    ],
  },
];

export default function EcomEnterprisePack() {
  // Selection states
  const [selectedServerType, setSelectedServerType] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [contractId, setContractId] = useState(null);
  const [contract, setContract] = useState("3");

  // Data states
  const [packages, setPackages] = useState([]);
  const [storages, setStorages] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyCode, setCurrencyCode] = useState("USD");

  // Price states
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Loading states
  const [loadingPackages, setLoadingPackages] = useState(false);
  const [loadingStorages, setLoadingStorages] = useState(false);

  // Step 1: Handle server type selection
  const handleServerTypeSelection = (serverType) => {
    setSelectedServerType(serverType);
    setSelectedPackage(null);
    setSelectedRam(null);
    setSelectedStorage(null);

    // Fetch packages for selected server type
    setLoadingPackages(true);
    getData(`https://hpanel.bfinit.com/api/product/list/${serverType.id}`).then(
      (data) => {
        setPackages(data.data);
        setLoadingPackages(false);
      },
    );
  };

  // Step 2: Handle package selection
  const handlePackageSelection = (packageData) => {
    setSelectedPackage(packageData);
    setSelectedRam(null);
    setSelectedStorage(null);
  };

  // Step 3: Handle RAM selection
  const handleRamSelection = (ram) => {
    setSelectedRam(ram);
    setSelectedStorage(null);

    // Fetch storages for selected package and RAM
    if (selectedPackage && ram) {
      setLoadingStorages(true);
      let url = `https://hpanel.bfinit.com/api/product/storages/${selectedPackage.id}/${ram}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setStorages(data?.data || selectedPackage.storages);
          setLoadingStorages(false);
        });
    }
  };

  // Step 4: Handle storage selection
  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
  };

  // Get price when all selections are made
  useEffect(() => {
    if (selectedPackage && selectedRam && selectedStorage) {
      let priceurl = `https://hpanel.bfinit.com/api/product/price/${selectedPackage.id}/${selectedRam}/${selectedStorage}`;
      fetch(priceurl)
        .then((res) => res.json())
        .then((data) => setUpdatedPrice(data?.data?.price));
    }
  }, [selectedPackage, selectedRam, selectedStorage]);

  // Find default contract ID
  const getDefaultContractId = useCallback(() => {
    const threeMonthPeriod = selectedPackage?.server_subscription_periods?.find(
      (period) => period.period_time === 3,
    );
    return (
      threeMonthPeriod?.id ??
      selectedPackage?.server_subscription_periods?.[0]?.id
    );
  }, [selectedPackage?.server_subscription_periods]);

  // Calculate prices
  useEffect(() => {
    if (
      selectedPackage &&
      (updatedPrice || selectedPackage?.defaultStorage?.price)
    ) {
      const selectedContractId = contractId
        ? contractId
        : getDefaultContractId();
      const selectedDuration =
        selectedPackage?.server_subscription_periods?.find(
          (duration) =>
            duration?.id?.toString() === selectedContractId?.toString(),
        );

      if (selectedDuration) {
        const basePrice = parseFloat(
          updatedPrice || selectedPackage?.defaultStorage?.price,
        );
        const month = selectedDuration?.period_time;
        const discountPercentage = selectedDuration?.discount || 0;

        setContract(month);

        const calculatedStandardPrice = basePrice * month;
        setStandardPrice((calculatedStandardPrice * exchangeRate).toFixed(2));

        const calculatedDiscountedPrice =
          calculatedStandardPrice * ((100 - discountPercentage) / 100);
        setDiscountedPrice(
          (calculatedDiscountedPrice * exchangeRate).toFixed(2),
        );
      }
    }
  }, [
    contractId,
    updatedPrice,
    selectedPackage,
    exchangeRate,
    getDefaultContractId,
  ]);

  // Get exchange rates
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(Object.entries(data?.rates));
      });
  }, []);

  // Handle currency change
  const handleCurrencyChange = (e) => {
    const selectedCurrencyCode = e.target.value;
    const selectedCurrencyRate = exchangeRates.find(
      ([currency, rate]) => currency === selectedCurrencyCode,
    )[1];

    setCurrencyCode(selectedCurrencyCode);
    setExchangeRate(selectedCurrencyRate);
  };

  const getBonusCount = (contractMonth) => {
    if (contractMonth >= 24) return 5;
    if (contractMonth >= 12) return 4;
    if (contractMonth >= 6) return 2;
    if (contractMonth >= 3) return 1;
    return 0;
  };

  const bonusCount = getBonusCount(parseInt(contract));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Enterprise E-commerce Pack
            </h1>
            <p className="mb-6 text-xl opacity-90">
              Custom-built for scalable global brands needing full control,
              resources, and support.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <FaShoppingCart />
                <span>Unlimited Stores</span>
              </div>
              <div className="flex items-center gap-2">
                <FaServer />
                <span>Dedicated Server</span>
              </div>
              <div className="flex items-center gap-2">
                <MdSpeed />
                <span>Enterprise Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-16">
        {/* Step 1: Server Type Selection */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Step 1: Choose Server Management Type
            </h2>
            <p className="text-gray-600">
              Select the level of server management that fits your technical
              requirements
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {dedicateServerProducts.map((serverType) => (
              <div
                key={serverType.id}
                className={`cursor-pointer rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                  selectedServerType?.id === serverType.id
                    ? "border-primary ring-2 ring-primary"
                    : "border border-gray-200"
                }`}
                onClick={() => handleServerTypeSelection(serverType)}
              >
                <div className="text-center">
                  <FaServer className="mx-auto mb-4 text-4xl text-primary" />
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    {serverType.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {serverType.description}
                  </p>
                  {selectedServerType?.id === serverType.id && (
                    <div className="mt-4 font-semibold text-primary">
                      ✓ Selected
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Step 2: Package Selection */}
          {selectedServerType && (
            <div className="animate-fade-in mb-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary">
                  Step 2: Choose Server Package
                </h2>
                <p className="text-gray-600">
                  Select from available {selectedServerType.title.toLowerCase()}{" "}
                  packages
                </p>
              </div>

              {loadingPackages ? (
                <div className="py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                  <p className="mt-2 text-gray-600">Loading packages...</p>
                </div>
              ) : (
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl ${
                        selectedPackage?.id === pkg.id
                          ? "border-primary ring-2 ring-primary"
                          : "border border-gray-200"
                      }`}
                      onClick={() => handlePackageSelection(pkg)}
                    >
                      <h3 className="mb-2 text-lg font-bold text-primary">
                        {pkg.name}
                      </h3>

                      <div className="mb-4 flex items-center gap-2">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel_Inside_Logo_%282020%29.svg"
                          alt="Intel"
                          loading="lazy"
                          className="h-[40px]"
                        />
                        <div>
                          <p className="text-sm">{pkg.processor}</p>
                          <h5 className="text-sm font-semibold">{pkg.core}</h5>
                        </div>
                      </div>

                      {pkg.ips && (
                        <p className="mb-2 flex gap-2">
                          <FaCheck className="mt-1 text-sm text-primary" />
                          <span className="flex-1 text-sm">{pkg.ips}</span>
                        </p>
                      )}

                      <div className="mt-4 border-t border-gray-100 pt-4">
                        <p className="text-center font-semibold text-primary">
                          Starting from ${pkg.defaultStorage?.price}/month
                        </p>
                        {selectedPackage?.id === pkg.id && (
                          <div className="mt-2 text-center font-semibold text-primary">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: RAM Selection */}
          {selectedPackage &&
            selectedPackage.uniqueRams[0] !== "0 setup fee" && (
              <div className="animate-fade-in mb-12">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-primary">
                    Step 3: Choose RAM Configuration
                  </h2>
                  <p className="text-gray-600">
                    Select the RAM configuration for {selectedPackage.name}
                  </p>
                </div>

                <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
                  {selectedPackage.uniqueRams.map((ram, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg bg-white p-4 shadow transition-all hover:shadow-lg ${
                        selectedRam === ram
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "border border-gray-200"
                      }`}
                      onClick={() => handleRamSelection(ram)}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-primary">{ram}</h4>
                        {selectedRam === ram && (
                          <div className="mt-2 text-sm font-semibold text-primary">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Step 4: Storage Selection */}
          {selectedRam && (
            <div className="animate-fade-in mb-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary">
                  Step 4: Choose Storage Configuration
                </h2>
                <p className="text-gray-600">
                  Select the storage configuration for your server
                </p>
              </div>

              {loadingStorages ? (
                <div className="py-8 text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                  <p className="mt-2 text-gray-600">
                    Loading storage options...
                  </p>
                </div>
              ) : (
                <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {(storages.length > 0
                    ? storages
                    : selectedPackage.storages || []
                  ).map((storage, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg bg-white p-4 shadow transition-all hover:shadow-lg ${
                        selectedStorage ===
                        (storages.length > 0 ? storage.storage : storage)
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "border border-gray-200"
                      }`}
                      onClick={() =>
                        handleStorageSelection(
                          storages.length > 0 ? storage.storage : storage,
                        )
                      }
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-primary">
                          {storages.length > 0 ? storage.storage : storage}
                        </h4>
                        {selectedStorage ===
                          (storages.length > 0 ? storage.storage : storage) && (
                          <div className="mt-2 text-sm font-semibold text-primary">
                            ✓ Selected
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 5: Final Configuration and Pricing */}
          {selectedStorage && (
            <div className="animate-fade-in mb-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary">
                  Final Configuration & Pricing
                </h2>
                <p className="text-gray-600">
                  Review your selections and choose contract duration
                </p>
              </div>

              <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Configuration Summary */}
                  <div>
                    <h3 className="mb-4 border-b pb-2 text-xl font-semibold text-primary">
                      Your Configuration
                    </h3>

                    <div className="mb-6 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Server Type:</span>
                        <span className="font-medium">
                          {selectedServerType.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-medium">
                          {selectedPackage.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">RAM:</span>
                        <span className="font-medium">{selectedRam}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Storage:</span>
                        <span className="font-medium">{selectedStorage}</span>
                      </div>
                    </div>

                    {/* Contract Duration */}
                    <div className="mb-4">
                      <label className="mb-2 block text-sm font-semibold text-primary">
                        Contract Duration
                      </label>
                      <select
                        value={contractId ?? getDefaultContractId()}
                        onChange={(e) => setContractId(e.target.value)}
                        className="w-full rounded border border-primary px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {selectedPackage.server_subscription_periods?.map(
                          (duration) => (
                            <option key={duration.id} value={duration.id}>
                              {duration.period_time} Months{" "}
                              {duration.discount &&
                                `(${duration.discount}% Off)`}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    {/* Currency */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-primary">
                        Currency
                      </label>
                      <select
                        value={currencyCode}
                        onChange={handleCurrencyChange}
                        className="w-full rounded border border-primary px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {exchangeRates.map(([currencyCode], i) => (
                          <option key={i} value={currencyCode}>
                            {currencyCode}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      Pricing Summary
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Price</p>
                        <p className="text-lg font-semibold text-primary">
                          {updatedPrice !== ""
                            ? (updatedPrice * exchangeRate).toFixed(2)
                            : (
                                selectedPackage?.defaultStorage?.price *
                                exchangeRate
                              ).toFixed(2)}{" "}
                          {currencyCode}
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <p className="mb-2 text-sm font-semibold">
                          Total Amount ({contract} months)
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {discountedPrice ? discountedPrice : standardPrice}{" "}
                          {currencyCode}
                        </p>
                      </div>

                      {/* Server Location */}
                      <div className="border-t pt-4">
                        <p className="mb-2 text-sm font-semibold text-primary">
                          Server Locations
                        </p>
                        <div className="flex items-center gap-3">
                          {JSON.parse(selectedPackage?.data_center || "[]").map(
                            (dc, i) => (
                              <div key={i} className="flex items-center gap-2">
                                {dc === "usa" && (
                                  <>
                                    <img
                                      src="https://cdn-icons-png.flaticon.com/512/330/330426.png"
                                      alt="USA"
                                      loading="lazy"
                                      className="h-6 w-6"
                                    />
                                    <span className="text-sm">USA</span>
                                  </>
                                )}
                                {dc === "europe" && (
                                  <>
                                    <img
                                      src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                                      alt="Europe"
                                      loading="lazy"
                                      className="h-6 w-6"
                                    />
                                    <span className="text-sm">Europe</span>
                                  </>
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bonus Products */}
                {bonusCount > 0 && (
                  <div className="mt-8 border-t border-gray-100 pt-6">
                    <div className="rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <FiGift className="text-xl text-primary" />
                        <h3 className="text-lg font-semibold text-primary">
                          {bonusCount} Free Product{bonusCount > 1 ? "s" : ""}{" "}
                          Included
                        </h3>
                      </div>

                      <p className="mb-4 text-sm text-gray-600">
                        Choose your preferred products during checkout. * Free
                        products are valid for the duration of your hosting
                        plan.
                      </p>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {bonusProducts.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded bg-white p-3"
                          >
                            <img
                              src={item.logo}
                              alt={`${item.name} logo`}
                              className="h-8 w-8 object-contain"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-sm font-semibold text-primary">
                              {item.price}/yr
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Order Button */}
                <div className="mt-8 text-center">
                  <Link
                    to={`https://hpanel.bfinit.com/checkout?productId=${selectedPackage.id}&packageType=server&ram=${selectedRam}&storage=${selectedStorage}&timePeriod=${contract}&currency=${currencyCode}&currencyRate=${exchangeRate}&storageVariantId=&enterprisePack=true`}
                    target="_blank"
                    className="inline-block rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-lg"
                  >
                    Order Enterprise Pack Now
                  </Link>
                  <p className="mt-2 text-sm text-gray-500">
                    Includes both server hosting and enterprise e-commerce
                    features
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enterprise Features Section - Always visible */}
        <div className="mt-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              What's Included in Enterprise Pack
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Get everything you need to build and scale your global e-commerce
              empire with enterprise-grade features and dedicated server
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {enterpriseFeatures.map((category, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-bold text-primary">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className="mt-1 flex-shrink-0 text-sm text-primary" />
                      <span className="text-sm leading-relaxed text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
