import Compare from "./Compare/Compare";
import Dashboard from "./Dashboard/Dashboard";
import Features from "./Features/Features";
import FreeGift from "./FreeGift/FreeGift";
import Hero from "./Hero/Hero";
import Overview from "./Overview/Overview";
import PremiumPricing from "./PremiumPricing/PremiumPricing";
import Pricing from "./Pricing/Pricing";
import SiteShowCase from "./SiteShowcase/SiteShowcase";
import SosayPromo from "./SosayPromo/SosayPromo";

export default function Home3() {
  return (
    <div className="font-inter">
      <Hero />
      {/* <Dashboard /> */}
      <SiteShowCase />
      <Pricing />
      <PremiumPricing />
      <Overview />
      <Features />
      <Compare />
      <FreeGift />
      <SosayPromo />
    </div>
  );
}
