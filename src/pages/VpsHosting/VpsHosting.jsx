import React from "react";
import ProductHero from "../../components/ProductHero";
import Pricing from "./Pricing";

export default function VpsHosting() {
  return (
    <div>
      <ProductHero
        title="Your VPS Hosting Needs? Covered!"
        subTitle="If you're looking for a fast, flexible and affordable solution, our VPS
        Hosting are ready to meet your demands!"
      />
      <Pricing/>
    </div>
  );
}
