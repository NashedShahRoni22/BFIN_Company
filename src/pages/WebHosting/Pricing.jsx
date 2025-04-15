import { useEffect, useState } from "react";
import ProductCardSkeleton from "../../components/Cards/CardSkleton";
import { getData } from "../../shared/GetData";
import { Link } from "react-router-dom";

const webHostingProducts = [
  {
    id: 7,
    title: "Small Business Web Hosting",
  },
  {
    id: 4,
    title: "Professional Web Hosting",
  },
  {
    id: 5,
    title: "Performance Web Hosting",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(7);
  const [products, setProducts] = useState([]);

  const [skeletonCount, setSkeletonCount] = useState(4);

  // fetch all dedicated servers
  useEffect(() => {
    setLoading(true);

    getData(`https://hpanel.bfinit.com/api/product/list/${productId}`).then(
      (data) => {
        setProducts(data.data);
        setSkeletonCount(data.data.length || 4);
        setLoading(false);
      },
    );
  }, [productId]);

  return (
    <div className="px-5 py-10 text-primary md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your Web Hosting Plan!</p>
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 flex items-center justify-center flex-wrap gap-4 py-2.5">
        {webHostingProducts.map((product, i) => (
          <button
            key={i}
            onClick={() => setProductId(product.id)}
            className={`min-w-fit cursor-pointer rounded-full px-4 py-2 ${
              product.id === productId
                ? "bg-primary text-white"
                : "hover:bg-neutral-100 bg-white"
            }`}
          >
            {product.title}
          </button>
        ))}
      </div>

      {/* Products Container */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {loading || !products.length
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className="border-neutral-200 flex flex-col gap-2 rounded-lg border bg-[#fafbff] p-6 text-center"
              >
                <h3 className="font-urbanist text-xl font-bold">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700">{product.core}</p>
                <p
                  className={`text-sm text-gray-700 ${product.uniqueRams[0] === "0 setup fee" && "hidden"} `}
                >
                  {product.uniqueRams[0]}
                </p>
                <p className="text-sm text-gray-700">{product.processor}</p>
                <p className="text-sm text-gray-700">{product.ips}</p>
                <div className="flex gap-1.5 justify-center">
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
                    ${product.defaultStorage.price}
                  </span>
                  /mo
                </p>
                <p className="text-accent font-semibold">$0 SETUP FEE</p>
                <Link
                  className="mt-4 w-full cursor-pointer rounded-full bg-primary px-4 py-2 text-white hover:bg-primary"
                  to={`https://hpanel.bfinit.com/checkout?productId=${product?.defaultStorage?.server_id}&packageType=server&ram=${product?.defaultStorage?.ram}&storage=${
                    product?.defaultStorage?.storage
                  }&timePeriod=1&currency=USD&currencyRate=1&storageVariantId=`}
                  target="_blanck"
                >
                  ORDER NOW!
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
