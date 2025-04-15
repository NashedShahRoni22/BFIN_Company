import { useEffect, useState } from "react";
import ProductCardSkeleton from "../../components/Cards/CardSkleton";
import { getData } from "../../shared/GetData";
import DedicatedServerPricing from "../../components/Cards/DedicatedServerPricing";

const dedicateServerProducts = [
  {
    id: 3,
    title: "Self Managed Server",
  },
  {
    id: 1,
    title: "Fully Managed Server",
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(3);
  const [products, setProducts] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(4);

  // handle tab button change
  const handleTabChange = (productId) => {
    setProductId(productId);
  };

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
    <div className="text-primary px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
      {/* section title */}
      <p className="text-center text-lg">Choose Your Dedicated Server Plan!</p>
      <h2 className="font-urbanist mt-4 text-center text-4xl font-bold">
        More Performance. Less Cost
      </h2>

      {/* tab button */}
      <div className="mt-8 flex items-center justify-center flex-wrap gap-4 py-2.5">
        {dedicateServerProducts.map((product, i) => (
          <button
            key={i}
            onClick={() => handleTabChange(product.id)}
            className={`min-w-fit cursor-pointer rounded-full px-4 py-2 ${
              product.id === productId
                ? "bg-primary text-white"
                : "bg-white hover:bg-neutral-100"
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
              <DedicatedServerPricing key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
