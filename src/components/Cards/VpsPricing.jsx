import { useState } from "react";
import { Link } from "react-router-dom";

export default function VpsPricing({ product }) {
  const [selectedStorageVariant, setSelectedStorageVariant] = useState(
    product?.defaultStorage?.storage,
  );

  return (
    <div className="border-neutral-200 flex flex-col gap-2 rounded-lg border bg-[#fafbff] p-6 text-center">
      <h3 className="font-urbanist text-xl font-bold">{product.name}</h3>
      <p className="text-sm text-gray-700">
        {product.processor} {product.core}
      </p>
      <p className="text-sm text-gray-700">{product.uniqueRams[0]}</p>
      {/* <p className="text-sm text-gray-700">{product.processor}</p> */}
      <p className="text-sm text-gray-700">{product.ips}</p>
      <div className="flex justify-center gap-1.5">
        <p className="text-sm text-gray-700">Data Centers at</p>
        {JSON.parse(product?.data_center).map((dc, i) => (
          <div key={i}>
            {dc === "usa" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/330/330426.png"
                alt=""
                loading="lazy"
                className="h-[20px]"
              />
            )}
            {dc === "europe" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                alt=""
                loading="lazy"
                className="h-[20px]"
              />
            )}
          </div>
        ))}
      </div>
      <select
        className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${product.uniqueRams.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
        disabled={product.uniqueRams.length <= 1}
      >
        {product.uniqueRams &&
          product.uniqueRams.length > 0 &&
          product.uniqueRams.map((ram, i) => (
            <option key={i} value={ram}>
              {ram}
            </option>
          ))}
      </select>
      <select
        className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${product.storages.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
        disabled={product.storages.length <= 1}
        onChange={(e) => setSelectedStorageVariant(e.target.value)}
      >
        {product.storages &&
          product.storages.length > 0 &&
          product.storages.map((storage, i) => (
            <option key={i} value={storage}>
              {storage}
            </option>
          ))}
      </select>

      <p className="mt-4">
        from{" "}
        <span className="text-xl font-bold">
          ${product.defaultStorage.price.toFixed(2)}
        </span>
        /mo
      </p>
      <p className="text-accent font-semibold">$0 SETUP FEE</p>
      <Link
        className="mt-4 w-full cursor-pointer rounded-full bg-primary px-4 py-2 text-white"
        to={`https://hpanel.bfinit.com/checkout?productId=${product?.defaultStorage?.server_id}&packageType=server&ram=${product?.defaultStorage?.ram}&storage=${selectedStorageVariant}&timePeriod=1&currency=USD&currencyRate=1&storageVariantId=`}
        target="_blanck"
      >
        ORDER NOW!
      </Link>
    </div>
  );
}
