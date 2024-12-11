import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EcomPricingCard({ pack, exchangerates }) {
  const { name, price, features } = pack;

  const [packPrice, setPackPrice] = useState(price);
  const [currency, setCurrency] = useState("USD");

  // Handle the currency and currencyRate on select tag change
  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    const selectedCurrencyRate = exchangerates.find(
      (currency) => currency[0] === selectedCurrency
    )[1];

    setPackPrice(price * selectedCurrencyRate);
    setCurrency(selectedCurrency);
  };

  return (
    <div className="border flex flex-col rounded-md shadow-xl">
      <div className="rounded-t-md py-6 bg-gradient-to-tl from-primary to-[#31c5f4] text-white">
        <p className="text-center text-lg font-semibold">{name}</p>
        <p className="mt-1.5 mb-6 text-3xl font-bold text-center">
          <span className="uppercase text-base font-semibold">{currency} </span>
          {Number.isInteger(packPrice) ? packPrice : packPrice.toFixed(2)}
          <span className="text-base font-semibold">/Year</span>
        </p>
        <div className="px-4 text-sm font-medium flex items-center justify-between">
          <p>Choose Currency:</p>
          <select
            onChange={handleCurrencyChange}
            className="outline-none rounded px-4 py-0.5 text-black"
          >
            {exchangerates.map((currency, i) => (
              <option key={i} value={currency[0]}>
                {currency[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="flex-1 mt-4 space-y-2.5">
        {features.map((feat, i) => (
          <li
            key={i}
            className="border-b px-4 py-1.5 flex items-center gap-2 last:border-b-0"
          >
            <FaCheck className="min-w-fit text-primary text-sm" /> {feat}
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="mt-6 py-2 rounded-b-md w-full block bg-gradient-to-t from-primary to-[#31c5f4] text-white text-center font-semibold hover:from-[#155c99] hover:to-[#31c5f4]"
      >
        Start Ecommerce Store
      </Link>
    </div>
  );
}
