import Blogs from "../Blog/Blogs";
import Benefits from "./Benefits/Benefits";
import HeroNew from "./HeroNew/HeroNew";
import KeyFeats from "./KeyFeats/KeyFeats";
import Pricing from "./Pricing/Pricing";
import ServerCompare from "./ServerCompare/ServerCompare";
import ServerSection from "./ServerSection/ServerSection";

export default function ServerHomePage() {
  return (
    <section>
      <HeroNew />
      <Pricing />
      <KeyFeats />
      <ServerCompare />
      <Benefits />
      <Blogs/>
      <ServerSection />
    </section>
  );
}
