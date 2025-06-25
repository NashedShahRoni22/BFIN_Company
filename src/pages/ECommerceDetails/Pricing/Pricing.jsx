import { useEffect, useState } from "react";
import { ecommercePackages } from "../../../data/ecommercePackages";
import EcomPricingCard from "../../../components/Cards/EcomPricingCard";

export default function Pricing({ pricingSection }) {
  const [exchangerates, setExchangeRates] = useState([]);

  // Fetch updated currencies info(currency name & currency rate)
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(Object.entries(data?.rates));
      });
  }, []);

  return (
    <section ref={pricingSection} className="py-10 md:py-20">
      <div className="text-center">
        <h2 className="inline-block animate-pulse bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-4xl">
          Limited Time Offer!
        </h2>
      </div>
      <p className="mt-6 text-balance text-center text-lg leading-relaxed">
        Get Pensaki Pack, Bobosoho Email and Pensaki Vault Cloud Storage{" "}
        <span className="font-semibold capitalize text-primary">
          absolutely free
        </span>{" "}
        with any package! Plus, choose one additional service from Omada
        Classico or Bitss Services.
      </p>
      <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {ecommercePackages.map((pack) => (
          <EcomPricingCard
            key={pack.id}
            pack={pack}
            exchangerates={exchangerates}
          />
        ))}
      </div>
    </section>
  );
}
