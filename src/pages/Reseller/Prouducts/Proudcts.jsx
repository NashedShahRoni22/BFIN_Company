import resslerProducts from "../../../data/resserProducts";
import SectionContainer from "../../../shared/SectionContainer";

export default function Proudcts() {
  return (
    <SectionContainer>
      <h2 className="mb-16 text-2xl font-bold text-center md:text-4xl">
        Boost Your Earnings with Premium Products
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {resslerProducts.map((product, i) => (
          <div key={i} className="p-4">
            <div className="">
              <img src={product.logo} alt={product.name} className="h-16" />
              <h3 className="mt-2 mb-6 text-2xl font-semibold">
                {product.name}
              </h3>
            </div>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
