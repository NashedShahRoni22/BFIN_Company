import Compare from "./Compare/Compare";
import Dashboard from "./Dashboard/Dashboard";
import Features from "./Features/Features";
import FreeGift from "./FreeGift/FreeGift";
import Hero from "./Hero/Hero";
import Overview from "./Overview/Overview";
import Pricing from "./Pricing/Pricing";
import SiteShowCase from "./SiteShowcase/SiteShowcase";

export default function Home3() {
  return (
    <div className="font-inter">
      <Hero />
      {/* <Dashboard /> */}
      <SiteShowCase />
      <Pricing />
      <Overview />
      <Features />
      <Compare />
      <FreeGift />
    </div>
  );
}
