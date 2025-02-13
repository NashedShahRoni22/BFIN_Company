import WhiteLabelFeatCard from "../../../components/Cards/WhiteLabelFeatCard";
import ArrowBtn from "../../../components/buttons/ArrowBtn";
import { sassProducts } from "../../../data/sassProducts";

export default function Products() {
  return (
    <>
      {sassProducts.map((product) => (
        <div
          key={product.id}
          className="mx-5 py-10 font-roboto md:container md:mx-auto md:py-20"
        >
          <h2 className="mt-4 text-center font-montserrat text-3xl font-bold capitalize md:mt-2 md:text-4xl">
            {product.title}
          </h2>
          <p className="mx-auto mt-8 w-full max-w-2xl text-center text-lg text-gray-700 md:mt-4">
            {product.description}
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feat, i) => (
              <WhiteLabelFeatCard key={i} feat={feat} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <ArrowBtn
              to={`/sass-software`}
              label={`Buy Now - €${product.cta}`}
            />
          </div>
        </div>
      ))}
    </>
  );
}
