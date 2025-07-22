import {
  LuGift,
  LuShieldCheck,
  LuMail,
  LuFileText,
  LuCreditCard,
} from "react-icons/lu";
import Container from "../../../shared/Container";

const giftItems = [
  {
    name: "Bitss Cyber Security",
    desc: "Safeguards your store, forms, and WordPress with anti-hack login, spam filtering, and malware scanning.",
    icon: <LuShieldCheck className="size-6 text-blue-600" />,
  },
  {
    name: "Omada Payroll",
    desc: "Automates payroll, from smart employee management to beautifully formatted payslips.",
    icon: <LuFileText className="size-6 text-purple-600" />,
  },
  {
    name: "IFGaap Invoicing",
    desc: "Send invoices and manage business finances anytime — fast, simple, and mobile-ready.",
    icon: <LuCreditCard className="size-6 text-blue-400" />,
  },
  {
    name: "Bobosho Email Security",
    desc: "Professional business email with built-in anti-spam and top-tier security features.",
    icon: <LuMail className="size-6 text-pink-500" />,
  },
];

export default function FreeGift() {
  return (
    <section id="free-tools" className="w-full py-10 md:py-20">
      <Container>
        <div className="mb-16 text-center">
          {/* badge */}
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-1 rounded-full border border-gray-200 bg-background px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <div className="items-center justify-center rounded-full bg-dark/85 p-1">
                <LuGift className="size-4 text-secondary" />
              </div>
              <p>Bonus Bundle - worth $416.75/year</p>
            </div>
          </div>

          {/* title */}
          <h2 className="text-center font-sora text-3xl font-bold text-dark md:text-4xl">
            Essential Business Tools - Included for Free
          </h2>

          <p className="mt-2 text-gray-600">
            Every e-Bfinit Ecommerce Pack comes with premium tools for
            cybersecurity, payroll, invoicing & business email - at no extra
            cost.
          </p>
        </div>

        {/* free gifts container */}
        <div className="grid grid-cols-2">
          {giftItems.map((gift, i) => (
            <div
              key={i}
              className={`border-t border-[#2900291c] p-10 ${i % 2 === 0 && "border-r pl-0"}`}
            >
              {/* Icon */}
              <div className="w-fit rounded-md border bg-gray-50 p-1.5">
                {gift.icon}
              </div>

              {/* Title */}
              <h4 className="mt-2.5 text-lg font-semibold">{gift.name}</h4>

              {/* Description */}
              <p className="mt-0.5 text-sm leading-relaxed text-gray-700">
                {gift.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
