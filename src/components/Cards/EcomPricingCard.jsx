import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EcomPricingCard({ pack, exchangerates }) {
  const { name, price, features } = pack;

  const [currency, setCurrency] = useState("USD");
  const [packPrice, setPackPrice] = useState(price);
  const [selectedDuration, setSelectedDuration] = useState("");
  const monthlyPrice = packPrice / 15 || 0;

  // Handle the currency and currencyRate on select tag change
  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    const selectedCurrencyRate = exchangerates.find(
      (currency) => currency[0] === selectedCurrency
    )[1];

    setPackPrice(price * selectedCurrencyRate);
    setCurrency(selectedCurrency);
  };

  console.log(selectedDuration);

  return (
    <div className="border rounded-md shadow-xl flex flex-col justify-between">
      <div>
        <div className="rounded-t-md pt-6 bg-gradient-to-t from-primary to-[#31c5f4] text-white">
          <p className="text-center text-lg font-semibold">{name}</p>
          <p className="my-1.5 pb-3 text-3xl font-bold text-center">
            <span className="uppercase text-base font-semibold">
              {currency}{" "}
            </span>
            {Number.isInteger(packPrice) ? packPrice : packPrice.toFixed(2)}
            <span className="text-base font-semibold">/Year</span>
          </p>

          <div className="pb-6 bg-gradient-to-b from-transparent to-primary text-white">
            <div className="mb-6 px-4 text-sm font-medium flex items-center justify-between">
              <p>Choose Currency:</p>
              <select
                onChange={handleCurrencyChange}
                className="outline-none rounded px-4 py-0.5 text-black bg-white"
              >
                {exchangerates.map((currency, i) => (
                  <option key={i} value={currency[0]} className="text-black">
                    {currency[0]}
                  </option>
                ))}
              </select>
            </div>
            <p className="mb-1 text-center text-xs">
              {currency}{" "}
              <span className="mr-1 text-sm font-medium line-through text-gray-300">
                {Number.isInteger(packPrice / 12)
                  ? packPrice / 12
                  : (packPrice / 12).toFixed(2)}
              </span>
              <span className="text-base font-semibold">
                {Number.isInteger(monthlyPrice)
                  ? monthlyPrice
                  : monthlyPrice.toFixed(2)}
              </span>
              /Month
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm justify-between px-4 mt-4">
          <p className="w-1/2 font-semibold">Select Contract:</p>
          <select
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="w-fit border bg-gray-300 outline-none font-medium rounded px-1 py-0.5"
          >
            <option value="" className="bg-white">
              Choose Duration
            </option>
            <option value="12" className="bg-white">
              12 Months
            </option>
            <option value="24" className="bg-white">
              24 Months
            </option>
          </select>
        </div>
        {(selectedDuration === "12" || selectedDuration === "24") && (
          <p className="text-sm px-4 mt-4">
            Get{" "}
            <span className="text-primary font-semibold">
              {selectedDuration === "12" ? "3 months free" : "6 months free"}
            </span>{" "}
            with a {selectedDuration} month plan —{" "}
            {selectedDuration === "12" ? "15 " : "30 "}
            Months Total!
          </p>
        )}

        <ul className="mt-4 space-y-2.5">
          {features.map((feat, i) => (
            <li
              key={i}
              className="border-b px-4 py-1.5 flex items-center gap-2 last:border-b-0"
            >
              <FaCheck className="min-w-fit text-primary text-sm" /> {feat}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/"
        className="mt-6 py-2 rounded-b-md w-full block bg-gradient-to-t from-primary to-[#31c5f4] text-white text-center font-semibold hover:from-[#155c99] hover:to-[#31c5f4]"
      >
        Get Started Now
      </Link>
    </div>
  );
}
