import { LuArrowRight, LuZap } from "react-icons/lu";

export default function HeroOld() {
  return (
    <div className="from-slate-50 min-h-screen bg-gradient-to-br via-green-50 to-lime-50">
      {/* Hero Section */}
      <section className="px-4 pt-20">
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center rounded-[32px] py-10 md:py-20">
          <div className="relative z-10">
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <div
                className="inline-flex items-center rounded-full border border-gray-200/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                style={{ backgroundColor: "#F1FFE7", color: "#1E1E1E" }}
              >
                <LuZap className="mr-2 h-4 w-4" style={{ color: "#BAFF29" }} />
                All-in-One Ecommerce Builder – Free to Start
              </div>
            </div>

            <h1
              className="mt-4 text-balance text-center text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              style={{ color: "#1E1E1E" }}
            >
              Build. Launch. Sell. <br />
              <span className="relative">
                <span className="relative z-10">Your Store for Free</span>
                <div
                  className="absolute inset-0 rotate-1 transform rounded-lg opacity-80"
                  style={{ backgroundColor: "#BAFF29" }}
                ></div>
              </span>
            </h1>

            <p
              className="mx-auto mt-8 max-w-4xl text-balance text-center text-lg font-light leading-relaxed md:text-xl"
              style={{ color: "#1E1E1E" }}
            >
              Launch a fully integrated ecommerce platform with enterprise-grade
              hosting, secure payments, advanced SEO & streamlined invoicing—all
              in one solution.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                className="group flex items-center rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#186BB5", color: "white" }}
              >
                Sign up for free
                <LuArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                className="flex items-center rounded-lg border-2 px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: "#a5d9c8",
                  color: "#1E1E1E",
                  backgroundColor: "white",
                }}
              >
                Is Bfinit right for me?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
