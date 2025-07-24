import BonusProductHighlight from "../../components/BonusProductHighlight";
import Container from "../../shared/Container";
import Blogs from "../Blog/Blogs";
import Benefits from "./Benefits/Benefits";
import DistributorAffiliation from "./DistributorAffiliation/DistributorAffiliation";
import HeroNew from "./HeroNew/HeroNew";
import KeyFeats from "./KeyFeats/KeyFeats";
import Pricing from "./Pricing/Pricing";
import ServerCompare from "./ServerCompare/ServerCompare";
import ServerSection from "./ServerSection/ServerSection";

export default function ServerHomePage() {
  return (
    <section>
      <Container>
        <HeroNew />
        <Pricing />
        <BonusProductHighlight />
        <DistributorAffiliation />
        <KeyFeats />
        <ServerCompare />
        <Benefits />
        <ServerSection />
        <Blogs />
      </Container>
    </section>
  );
}
