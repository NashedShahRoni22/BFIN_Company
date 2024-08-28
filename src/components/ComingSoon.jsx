import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="mx-5 md:container md:mx-auto min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Coming Soon ...
      </h1>
      <Link to={"/"} className="font-semibold md:text-xl capitalize underline text-primary">
        Go back to home
      </Link>
    </section>
  );
}
