import { Helmet } from "react-helmet";
import Hero from "./Hero/Hero";
import { useLocation } from "react-router-dom";

export default function OurBrands() {
  const location = useLocation();
  return (
    <section className="py-10 md:py-20">
      {location.pathname === "/our-brands" && (
        <Helmet>
          <title>
            BFIN Company – Innovative Hosting, Software & Cybersecurity
            Solutions | France
          </title>
          <meta
            name="description"
            content="BFIN Company based in Sète, France. Your trusted partner for web hosting, cybersecurity, software development, HR solutions and white label platforms. Explore our top brands including Bitss, BFINIT, Ifgaap, and Omada."
          />
        </Helmet>
      )}

      <Hero />
    </section>
  );
}
