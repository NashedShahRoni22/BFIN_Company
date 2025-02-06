import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [hostingProducts, setHostingProducts] = useState([]);

  // fetching hosting products
  useEffect(() => {
    const fetchHostingProducts = async () => {
      const response = await fetch(
        "https://hpanel.bfinit.com/api/product/categories",
      );
      const data = await response.json();
      setHostingProducts(data.data);
    };

    fetchHostingProducts();
  }, []);

  return (
    <section className="py-10 md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Our Data Center Features
      </h2>
      <div className="mt-8 grid grid-cols-12 gap-6">
        {hostingProducts &&
          hostingProducts.length > 0 &&
          hostingProducts.map((product, index) => (
            <Link
              key={index}
              to={`/hosting-products/${product.id}`}
              className="group relative col-span-12 overflow-hidden rounded-lg bg-[#f7f7f8] p-6 text-center hover:bg-transparent hover:text-white md:col-span-6 lg:col-span-4"
            >
              <p className="text-xl font-medium">{product?.name}</p>
              <div className="absolute -bottom-2 right-0 size-0 rounded-lg bg-primary transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:-z-10 group-hover:size-full"></div>
            </Link>
          ))}
      </div>
    </section>
  );
}
