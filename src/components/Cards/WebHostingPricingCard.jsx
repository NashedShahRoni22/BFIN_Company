import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function HostingPricingCard({ product }) {
  const { server_subscription_periods } = product;

  const [storages, setStorages] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencyCode, setCurrencyCode] = useState("USD");

  // Initialize with default values
  const [serverId, setServerId] = useState(product.id);
  const [ramId, setRamId] = useState(product.uniqueRams[0]);
  const [storageId, setStorageId] = useState(product.storages[0]);
  const [contractId, setContractId] = useState(null);
  const [contract, setContract] = useState("3");

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
          setStorageId(data?.data[0]?.storage);
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

  // Find default contract ID (3 months if available, otherwise first item)
  const getDefaultContractId = useCallback(() => {
    const threeMonthPeriod = server_subscription_periods?.find(
      (period) => period.period_time === 3,
    );
    return threeMonthPeriod?.id ?? server_subscription_periods?.[0]?.id;
  }, [server_subscription_periods]);

  useEffect(() => {
    const selectedContractId = contractId ? contractId : getDefaultContractId();
    const selectedDuration = server_subscription_periods?.find(
      (duration) => duration?.id?.toString() === selectedContractId?.toString(),
    );

    if (selectedDuration && product?.defaultStorage?.price) {
      const basePrice = parseFloat(
        updatedPrice || product?.defaultStorage?.price,
      );
      const month = selectedDuration?.period_time;
      const serverId = selectedDuration?.server_id;
      const discountPercentage = selectedDuration?.discount || 0;

      // set contract month
      setContract(month);
      setServerId(serverId);

      // standard price
      const calculatedStandardPrice = basePrice * month;
      setStandardPrice((calculatedStandardPrice * exchangeRate).toFixed(2));

      // discounted price
      const calculatedDiscountedPrice =
        calculatedStandardPrice * ((100 - discountPercentage) / 100);
      setDiscountedPrice((calculatedDiscountedPrice * exchangeRate).toFixed(2));
    }
  }, [
    contractId,
    updatedPrice,
    server_subscription_periods,
    product?.defaultStorage?.price,
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

  // Handle the currency and rate change
  const handleCurrencyChange = (e) => {
    const selectedCurrencyCode = e.target.value;
    const selectedCurrencyRate = exchangeRates.find(
      ([currency, rate]) => currency === selectedCurrencyCode,
    )[1];

    setCurrencyCode(selectedCurrencyCode);
    setExchangeRate(selectedCurrencyRate);
  };

  return (
    <div className="flex flex-col justify-between gap-2.5 rounded p-6 shadow">
      <h5 className="font-bold text-primary">{product?.name}</h5>
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel_Inside_Logo_%282020%29.svg"
          alt=""
          loading="lazy"
          className="h-[60px]"
        />
        <div>
          <p className="text-sm">{product?.processor}</p>
          <hr />
          <h5 className="text-sm font-semibold">{product?.core}</h5>
        </div>
      </div>

      {product?.ips !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-primary" />
          <span className="flex-1 text-sm">{product?.ips}</span>
        </p>
      )}

      {/* description 1 */}
      {product?.description1 !== null &&
        product?.description1?.includes("[") &&
        JSON.parse(product.description1)?.map((desc, i) => (
          <p key={i} className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">{desc}</span>
          </p>
        ))}

      {product?.description1 !== null &&
        !product?.description1?.includes("[") && (
          <p className="flex gap-2">
            <FaCheck className="text-primary" />
            <span className="flex-1 text-sm">{product?.description1}</span>
          </p>
        )}

      {!product?.description1 && product?.description2 !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-primary" />
          <span className="flex-1 text-sm">{product?.description2}</span>
        </p>
      )}
      {!product?.description1 && product?.description3 !== null && (
        <p className="flex gap-2">
          <FaCheck className="text-primary" />
          <span className="flex-1 text-sm">{product?.description3}</span>
        </p>
      )}

      {/* Select RAM with default value */}
      {product?.uniqueRams[0] !== "0 setup fee" && (
        <div className="flex flex-col gap-2.5">
          <label htmlFor="" className="text-sm font-semibold text-primary">
            Ram
          </label>
          <select
            value={ramId}
            onChange={(e) => setRamId(e.target.value)}
            className="rounded border border-primary px-4 py-1 focus:outline-none"
          >
            {product?.uniqueRams?.map((ur, index) => (
              <option key={index} value={ur}>
                {ur}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Select Storage with default value */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-primary">
          Storage
        </label>
        {storages?.length > 0 ? (
          <select
            value={storageId}
            onChange={(e) => setStorageId(e.target.value)}
            className="rounded border border-primary px-4 py-1 focus:outline-none"
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
            className="rounded border border-primary px-4 py-1 focus:outline-none"
          >
            {product?.storages?.map((us, index) => (
              <option key={index} value={us}>
                {us}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Select Contract with default value */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-primary">
          Contract
        </label>
        <select
          value={contractId ?? getDefaultContractId()}
          onChange={(e) => setContractId(e.target.value)}
          className="rounded border border-primary px-4 py-1 focus:outline-none"
        >
          {server_subscription_periods?.length > 0 &&
            server_subscription_periods?.map((duration) => (
              <option key={duration?.id} value={duration?.id}>
                {duration?.period_time} Months{" "}
                {duration?.discount && `(${duration?.discount}% Off)`}
              </option>
            ))}
        </select>
      </div>

      {/* Currency Select Box */}
      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-primary">
          Currencey
        </label>
        <select
          value={currencyCode}
          onChange={handleCurrencyChange}
          className="rounded border border-primary px-4 py-1 focus:outline-none"
        >
          {exchangeRates.map(([currencyCode], i) => (
            <option key={i} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="" className="text-sm font-semibold text-primary">
          Server Location
        </label>
        {JSON.parse(product?.data_center).map((dc, i) => (
          <div key={i}>
            {dc === "usa" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/330/330426.png"
                alt=""
                loading="lazy"
                className="h-[40px]"
              />
            )}
            {dc === "europe" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                alt=""
                loading="lazy"
                className="h-[40px]"
              />
            )}
          </div>
        ))}
      </div>
      {/* Display Standard and Discounted Prices */}
      <p className="text-center font-semibold text-primary">
        {updatedPrice !== "" ? (
          (updatedPrice * exchangeRate).toFixed(2)
        ) : (
          <>{(product?.defaultStorage?.price * exchangeRate).toFixed(2)}</>
        )}{" "}
        {currencyCode} / <span className="text-sm">Per month</span>
      </p>

      {/* Discounted price */}
      {/* {discountedPrice !== "" && (
        <>
          <p className="text-center text-sm font-semibold">You are paying</p>
          <p className="text-center text-xl font-semibold text-primary md:text-2xl">
            {discountedPrice} {currencyCode}
          </p>
        </>
      )} */}

      <p className="text-center text-sm font-semibold">You are paying</p>
      <p className="text-center text-xl font-semibold text-primary md:text-2xl">
        {discountedPrice ? discountedPrice : standardPrice} {currencyCode}
      </p>

      {/* Standard regular price */}
      {/* {contract !== "1" && (
        <>
          {standardPrice !== "" && (
            <>
              <p className="text-center text-sm">
                Standard regular price for {contract} month
              </p>
              <p className="text-center font-semibold text-red-400 line-through">
                {standardPrice} {currencyCode}
              </p>
            </>
          )}
        </>
      )} */}

      <Link
        to={`https://hpanel.bfinit.com/checkout?productId=${serverId}&packageType=server&ram=${ramId}&storage=${storageId}&timePeriod=${contract}&currency=${currencyCode}&currencyRate=${exchangeRate}&storageVariantId=`}
        target="_blank"
        className="mt-10 rounded-xl bg-primary px-4 py-2 text-center text-white"
      >
        Order Now
      </Link>
    </div>
  );
}
