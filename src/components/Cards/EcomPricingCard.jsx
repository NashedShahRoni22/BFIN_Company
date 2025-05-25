import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function EcomPricingCard({ pack, exchangerates }) {
  const { name, price, features, id, ram, storage } = pack;

  const [currency, setCurrency] = useState("USD");
  const [selectedCurrencyRate, setSelectedCurrencyRate] = useState(1);
  const [packPrice, setPackPrice] = useState(price);
  const [selectedDuration, setSelectedDuration] = useState("");
  const monthlyPrice = packPrice / 12 || 0;

  // Handle the currency and currencyRate on select tag change
  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    const selectedCurrencyRate = exchangerates.find(
      (currency) => currency[0] === selectedCurrency,
    )[1];

    setPackPrice(price * selectedCurrencyRate);
    setSelectedCurrencyRate(selectedCurrencyRate);
    setCurrency(selectedCurrency);
  };

  const buyingUrl = encodeURI(
    `https://hpanel.bfinit.com/checkout?productId=${id}&packageType=server&ram=${ram}&storage=${storage}&timePeriod=${selectedDuration ? selectedDuration : "12"}&currency=${currency}&currencyRate=${selectedCurrencyRate}&storageVariantId=`,
  );

  return (
    <div className="flex flex-col justify-between rounded-md border shadow-xl">
      <div>
        <div className="rounded-t-md bg-gradient-to-t from-primary to-[#31c5f4] pt-6 text-white">
          <p className="text-center text-lg font-semibold">{name}</p>
          <p className="my-1.5 pb-3 text-center text-3xl font-bold">
            <span className="text-base font-semibold uppercase">
              {currency}{" "}
            </span>
            {Number.isInteger(packPrice) ? packPrice : packPrice.toFixed(2)}
            <span className="text-base font-semibold">/Year</span>
          </p>

          <div className="bg-gradient-to-b from-transparent to-primary pb-6 text-white">
            <div className="mb-6 flex items-center justify-between px-4 text-sm font-medium">
              <p>Choose Currency:</p>
              <select
                onChange={handleCurrencyChange}
                className="rounded bg-white px-4 py-0.5 text-black outline-none"
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
              {/* <span className="mr-1 text-sm font-medium text-gray-300 line-through">
                {Number.isInteger(packPrice / 12)
                  ? packPrice / 12
                  : (packPrice / 12).toFixed(2)}
              </span> */}
              <span className="text-base font-semibold">
                {Number.isInteger(monthlyPrice)
                  ? monthlyPrice
                  : monthlyPrice.toFixed(2)}
              </span>
              /Month
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-1 px-4 text-sm">
          <p className="w-1/2 font-semibold">Select Contract:</p>
          <select
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="w-fit rounded border bg-gray-300 px-1 py-0.5 font-medium outline-none"
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
        {/* {(selectedDuration === "12" || selectedDuration === "24") && (
          <p className="mt-4 px-4 text-sm">
            Get{" "}
            <span className="font-semibold text-primary">
              {selectedDuration === "12" ? "3 months free" : "6 months free"}
            </span>{" "}
            with a {selectedDuration} month plan —{" "}
            {selectedDuration === "12" ? "15 " : "30 "}
            Months Total!
          </p>
        )} */}

        <ul className="mt-4 space-y-2.5">
          {features.map((feat, i) => (
            <li
              key={i}
              className="flex items-center gap-2 border-b px-4 py-1.5 last:border-b-0"
            >
              <FaCheck className="min-w-fit text-sm text-primary" /> {feat}
            </li>
          ))}
          <li className="flex items-center gap-2 border-b px-4 py-1.5 last:border-b-0">
            <FaCheck className="min-w-fit text-sm text-primary" /> {ram}
          </li>
          <li className="flex items-center gap-2 border-b px-4 py-1.5 last:border-b-0">
            <FaCheck className="min-w-fit text-sm text-primary" /> {storage}
          </li>
        </ul>
      </div>

      <Link
        to={buyingUrl}
        target="_blank"
        className="mt-6 block w-full rounded-b-md bg-gradient-to-t from-primary to-[#31c5f4] py-2 text-center font-semibold text-white hover:from-[#155c99] hover:to-[#31c5f4]"
      >
        Get Started Now
      </Link>
    </div>
  );
}
