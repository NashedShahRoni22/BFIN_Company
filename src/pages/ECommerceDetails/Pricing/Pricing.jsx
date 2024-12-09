import { ecommercePackages } from "../../../data/ecommercePackages";
import EcomPricingCard from "../../../components/Cards/EcomPricingCard";
import { useEffect, useState } from "react";

export default function Pricing() {
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
    <section className="py-10 grid gap-5 md:py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {ecommercePackages.map((pack) => (
        <EcomPricingCard
          key={pack.id}
          pack={pack}
          exchangerates={exchangerates}
        />
      ))}
    </section>
  );
}
