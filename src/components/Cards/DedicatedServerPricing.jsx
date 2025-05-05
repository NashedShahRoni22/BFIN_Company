import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCheck } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

export default function DedicatedproductPricing({ product }) {
  const [storages, setStorages] = useState([]);
  const [price, setPrice] = useState(product?.defaultStorage?.price);
  const [selectedRamVariant, setSelectedRamVariant] = useState(
    product?.defaultStorage?.ram,
  );
  const [selectedStorageVariant, setSelectedStorageVariant] = useState(
    product?.defaultStorage?.storage,
  );

  // fetch updated price based on ram and storage
  useEffect(() => {
    const fetchUpdatedPrice = async () => {
      try {
        const res = await fetch(
          `https://hpanel.bfinit.com/api/product/price/${product?.defaultStorage?.server_id}/${selectedRamVariant}/${selectedStorageVariant}`,
        );
        const data = await res.json();
        if (data?.success) {
          setPrice(data?.data?.price);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUpdatedPrice();
  }, [product, selectedRamVariant, selectedStorageVariant]);

  // Get storage options based on the serverId and selected ram
  useEffect(() => {
    if (product?.defaultStorage?.server_id && selectedRamVariant) {
      let url = `https://hpanel.bfinit.com/api/product/storages/${product?.defaultStorage?.server_id}/${selectedRamVariant}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setStorages(data?.data);
          setSelectedStorageVariant(data?.data[0]?.storage);
        });
    }
  }, [product?.defaultStorage?.server_id, selectedRamVariant]);

  const productDesc = JSON.parse(product.description1);
  return (
    <div className="border-neutral-200 flex flex-col gap-2 rounded-lg border bg-[#fafbff] p-6">
      <div className="flex-1">
        <h3 className="font-urbanist text-xl font-bold">{product.name}</h3>
        <p className="mt-1.5 flex gap-1 text-sm text-gray-700">
          <IoCheckbox className="min-w-fit text-primary" /> {product.core} vCore
        </p>
        <p className="mt-1.5 flex gap-1 text-sm text-gray-700">
          <IoCheckbox className="min-w-fit text-primary" />{" "}
          {product.uniqueRams[0]}
        </p>
        <p className="mt-1.5 flex gap-1 text-sm text-gray-700">
          <IoCheckbox className="min-w-fit text-primary" /> {product.processor}
        </p>
        <p className="mt-1.5 flex gap-1 text-sm text-gray-700">
          <IoCheckbox className="min-w-fit text-primary" /> {product.ips}
        </p>
        <ul className="text-sm text-gray-700">
          {productDesc?.map((pd, index) => (
            <li key={index} className="mt-1.5 flex gap-1">
              <IoCheckbox className="min-w-fit text-primary" />
              {pd}
            </li>
          ))}
        </ul>

        <div className="mt-1.5 flex gap-1.5">
          <p className="text-sm text-gray-700 flex gap-1"> <IoCheckbox className="min-w-fit text-primary" /> Data Centers at</p>
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

        {/* select ram drop-down */}
        <select
          className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${product.uniqueRams.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
          disabled={product.uniqueRams.length <= 1}
          onChange={(e) => setSelectedRamVariant(e.target.value)}
        >
          {product.uniqueRams &&
            product.uniqueRams.length > 0 &&
            product.uniqueRams.map((ram, i) => (
              <option key={i} value={ram}>
                {ram}
              </option>
            ))}
        </select>

        {/* storage select dropdown */}
        {storages && storages.length > 0 ? (
          <select
            className={`mt-2 w-full rounded-full border px-4 py-1.5 outline-none ${storages.length > 1 ? "border-black" : "border-neutral-200 bg-neutral-200 text-neutral-700"}`}
            disabled={storages.length <= 1}
            onChange={(e) => setSelectedStorageVariant(e.target.value)}
          >
            {storages &&
              storages.length > 0 &&
              storages.map((storage, i) => (
                <option key={i} value={storage.storage}>
                  {storage.storage}
                </option>
              ))}
          </select>
        ) : (
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
        )}
      </div>

      <p className="mt-4 text-center">
        from <span className="text-xl font-bold">${price}</span>/mo
      </p>
      <p className="text-accent text-center font-semibold">$0 SETUP FEE</p>

      <Link
        className="hover:bg-primary-hover mt-4 w-full cursor-pointer rounded-full bg-primary px-4 py-2 text-center text-white"
        to={`https://hpanel.bfinit.com/checkout?productId=${product?.defaultStorage?.server_id}&packageType=server&ram=${selectedRamVariant}&storage=${selectedStorageVariant}&timePeriod=1&currency=USD&currencyRate=1&storageVariantId=`}
        target="_blanck"
      >
        ORDER NOW!
      </Link>
    </div>
  );
}
