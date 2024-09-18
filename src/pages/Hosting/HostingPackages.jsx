import React, { useEffect, useState } from "react";
import { GrStorage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiCheckShield } from "react-icons/bi";

export default function HostingPackages({ s }) {
  const [storages, setStorages] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate of 1
  const [currencyCode, setCurrencyCode] = useState("USD"); // Default currency as USD

  // Initialize with default values
  const [serverId, setServerId] = useState(s.id);
  const [ramId, setRamId] = useState(s.uniqueRams[0]); // First RAM element selected by default
  const [storageId, setStorageId] = useState(s.storages[0]); // First Storage element selected by default
  const [contract, setContract] = useState("3"); // Default to 3 months

  // Prices data
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  // Get storage options based on the serverId and RAM
  useEffect(() => {
    if (serverId && ramId) {
      let url = `https://hpanel.bfinit.com/api/product/storages/${serverId}/${ramId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setStorages(data?.data);
          setStorageId(data?.data[0]?.storage); // Select the first storage by default
        });
    }
  }, [serverId, ramId]);

  // Get price based on the selected RAM and storage
  useEffect(() => {
    if (serverId && ramId && storageId) {
      let priceurl = `https://hpanel.bfinit.com/api/product/price/${serverId}/${ramId}/${storageId}`;
      fetch(priceurl)
        .then((res) => res.json())
        .then((data) => setUpdatedPrice(data?.data?.price));
    }
  }, [serverId, ramId, storageId]);

  useEffect(() => {
    const basePrice = parseFloat(updatedPrice || s?.defaultStorage?.price);

    // Apply discount based on contract
    let discountPercentage = 15;
    let month = 3;
    if (contract === "3") {
      discountPercentage = 15;
      month = 3;
    } else if (contract === "6") {
      discountPercentage = 19;
      month = 6;
    } else if (contract === "12") {
      discountPercentage = 28;
      month = 12;
    }else if (contract === "24") {
      discountPercentage = 34;
      month = 24;
    }
    const calculatedStandardPrice = basePrice * month;
    setStandardPrice((calculatedStandardPrice * exchangeRate).toFixed(2));

    const calculatedDiscountedPrice =
      calculatedStandardPrice * ((100 - discountPercentage) / 100);
    setDiscountedPrice((calculatedDiscountedPrice * exchangeRate).toFixed(2));
  }, [contract, updatedPrice, exchangeRate]);

  // Get exchange rates
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(Object.entries(data?.rates));
      });
  }, []);

  // Handle the currency and rate change
  const handleCurrencyChange = (e) => {
    const selectedCurrencyCode = e.target.value;
    const selectedCurrencyRate = exchangeRates.find(
      ([currency, rate]) => currency === selectedCurrencyCode
    )[1];

    setCurrencyCode(selectedCurrencyCode);
    setExchangeRate(selectedCurrencyRate);
  };

  return (
    <div className="flex flex-col justify-between gap-2.5 p-4 shadow-xl rounded-xl">
      <GrStorage className="text-5xl text-primary" />
      <h5 className="font-bold text-xl text-primary">{s?.name}</h5>
      <h5 className="font-semibold">{s?.core}</h5>

      {/* Select RAM with default value */}
      <label htmlFor="" className="text-sm font-semibold text-primary">Choose Ram</label>
      <select
        value={ramId}
        onChange={(e) => setRamId(e.target.value)}
        className="px-4 py-2 border-2 rounded focus:outline-none border-primary "
      >
        {s?.uniqueRams?.map((ur, index) => (
          <option key={index} value={ur}>
            {ur}
          </option>
        ))}
      </select>

      {/* Select Storage with default value */}
      <label htmlFor="" className="text-sm font-semibold text-primary">Choose Storage</label>
      {storages?.length > 0 ? (
        <select
          value={storageId}
          onChange={(e) => setStorageId(e.target.value)}
          className="px-4 py-2 border-2 rounded focus:outline-none border-primary "
        >
          {storages?.map((us, index) => (
            <option key={index} value={us?.storage}>
              {us?.storage}
            </option>
          ))}
        </select>
      ) : (
        <select
          value={storageId}
          onChange={(e) => setStorageId(e.target.value)}
          className="px-4 py-2 border-2 rounded focus:outline-none border-primary "
        >
          {s?.storages?.map((us, index) => (
            <option key={index} value={us}>
              {us}
            </option>
          ))}
        </select>
      )}

      {/* Select Contract with default value */}
      <label htmlFor="" className="text-sm font-semibold text-primary">Choose Contract</label>
      <select
        value={contract}
        onChange={(e) => setContract(e.target.value)}
        className="px-4 py-2 border-2 rounded focus:outline-none border-primary "
      >
        <option value="3">3 Months (15% Discount)</option>
        <option value="6">6 Months (19% Discount)</option>
        <option value="12">12 Months (28% Discount)</option>
        <option value="24">24 Months (34% Discount)</option>
      </select>

      {/* Currency Select Box */}
      <label htmlFor="" className="text-sm font-semibold text-primary">Choose Currencey</label>
      <select
        value={currencyCode}
        onChange={handleCurrencyChange}
        className="px-4 py-2 border-2 rounded focus:outline-none border-primary "
      >
        {exchangeRates.map(([currencyCode], i) => (
          <option key={i} value={currencyCode}>
            {currencyCode}
          </option>
        ))}
      </select>

      <p className="flex gap-2">
        <BiCheckShield className="text-3xl text-primary" />
        <span className="flex-1">{s?.description1}</span>
      </p>
      <p className="flex gap-2">
        <BiCheckShield className="text-3xl text-primary" />
        <span className="flex-1">{s?.description2}</span>
      </p>
      <p className="flex gap-2">
        <BiCheckShield className="text-3xl text-primary" />
        <span className="flex-1">{s?.description3}</span>
      </p>
      <hr />
      {/* Display Standard and Discounted Prices */}
      <p className="text-primary text-center">
        {updatedPrice !== "" ? (
          (updatedPrice * exchangeRate).toFixed(2)
        ) : (
          <>{(s?.defaultStorage?.price * exchangeRate).toFixed(2)}</>
        )}{" "}
        {currencyCode} / <span className="text-sm">Per month</span>
      </p>

      {/* Discounted price */}
      {discountedPrice !== "" && (
        <>
          <p className="text-sm font-semibold text-center">You are paying</p>
          <p className="text-2xl md:text-3xl font-semibold text-primary text-center">
            {discountedPrice} {currencyCode}
          </p>
        </>
      )}

      {/* Standard regular price */}
      {standardPrice !== "" && (
        <>
          <p className="text-sm text-center">
            Standard regular price for {contract} month
          </p>
          <p className="font-semibold text-red-400 line-through text-center">
            {standardPrice} {currencyCode}
          </p>
        </>
      )}

      <Link
        to={`https://hpanel.bfinit.com/checkout?productId=${serverId}&packageType=server&ram=${ramId}&storage=${storageId}&timePeriod=${contract}&currency=${currencyCode}&currencyRate=${exchangeRate}&storageVariantId=`}
        target="_blank"
        className="px-4 py-2 rounded-xl bg-primary text-white text-center mt-10"
      >
        Order Now
      </Link>
    </div>
  );
}
