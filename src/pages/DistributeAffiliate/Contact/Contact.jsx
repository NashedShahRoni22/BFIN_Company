import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="py-10 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Start Earning?</h2>
        <p className="mb-8 text-xl text-primary">
          Join now and get your exclusive partner dashboard instantly.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to={"https://hpanel.bfinit.com/distributor/register"} target="_blank" className="rounded-lg bg-primary px-8 py-3 font-bold text-white">
            Sign Up Free
          </Link>
        </div>
        <p className="mt-4 text-sm text-primary/65">
          No credit card required. Approval in 24 hours.
        </p>
      </div>
    </div>
  );
}
