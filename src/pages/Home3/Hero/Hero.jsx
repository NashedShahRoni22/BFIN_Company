import { Link } from "react-router-dom";
import heroBg from "../../../assets/home-3/hero-bg.webp";
import Typewriter from "typewriter-effect";
import Container from "../../../shared/Container";

export default function Hero() {
  return (
    <section
      style={{
        background: `linear-gradient(to left top, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${heroBg}) center/cover no-repeat`,
      }}
      className="flex min-h-[calc(100vh+103px)] items-center py-10 text-white md:py-20"
    >
      <Container>
        <h1 className="text-8xl font-light leading-tight">
          Build the next <br />
          <Typewriter
            options={{
              strings: [
                "a thriving brand",
                "real online revenue",
                "a global business",
                "a powerful store",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-xl font-light">
          Launch free with built-in invoicing, payroll, payments, SEO &
          cybersecurity. Everything you need to grow smart & fast.
        </p>

        <Link
          to="/bfinit-ecomerce-platform"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 ease-linear hover:bg-softGray"
        >
          Launch Your Store
        </Link>
      </Container>
    </section>
  );
}
