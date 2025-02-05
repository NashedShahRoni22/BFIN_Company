import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import dataBackupImg from "../../assets/data-center/hero.jpeg";
import { BsCheck } from "react-icons/bs";

const DataCenter = () => {
  return (
    <main>
      <Hero />
      <Products />

      <div className="mb-12 flex flex-col items-center md:flex-row">
        {/* Text Content */}
        <div className="p-6 md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Unlimited Data Backup & Geo-Redundant Storage
          </h2>
          <p className="mb-4">
            Never lose your data again! We offer{" "}
            <span className="font-semibold text-primary">Unlimited</span>{" "}
            backups, stored securely in{" "}
            <span className="font-semibold text-primary">Europe</span> and{" "}
            <span className="font-semibold text-primary">USA</span> data
            centers. Restore your data anytime with a single click.
          </p>
          <ul>
            <li className="flex items-center gap-0.5">
              <BsCheck className="min-w-fit text-2xl text-primary" /> Automated
              daily backups
            </li>
            <li className="flex items-center gap-0.5">
              <BsCheck className="min-w-fit text-2xl text-primary" /> Multiple
              secure data centers
            </li>
            <li className="flex items-center gap-0.5">
              <BsCheck className="min-w-fit text-2xl text-primary" /> Instant
              recovery options
            </li>
            <li className="flex items-center gap-0.5">
              <BsCheck className="min-w-fit text-2xl text-primary" /> End-to-end
              encryption for security
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={dataBackupImg}
            alt="Data Backup"
            className="h-[440px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default DataCenter;
