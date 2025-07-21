import Compare from "./Compare/Compare";
import Dashboard from "./Dashboard/Dashboard";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Overview from "./Overview/Overview";

export default function Home3() {
  return (
    <div className="font-inter">
      <Hero />
      <Dashboard />
      <Features />
      <Overview />
      <Compare />
    </div>
  );
}
