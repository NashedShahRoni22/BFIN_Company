import { useState, useEffect } from "react";

export default function Pricing({ sectionRef }) {
  // State for server specifications
  const [serverType, setServerType] = useState("General");
  const [cpuCores, setCpuCores] = useState(1);
  const [ram, setRam] = useState(1);
  const [ssdSize, setSsdSize] = useState(20);

  // State for the calculated price
  const [price, setPrice] = useState(0);

  // Function to calculate the price based on selections
  const calculatePrice = () => {
    let basePrice = 0;

    // Set base prices based on server type
    switch (serverType) {
      case "General":
        basePrice = 4;
        break;
      case "Dedicated":
        basePrice = 6;
        break;
      case "Burstable":
        basePrice = 5;
        break;
      default:
        basePrice = 4;
        break;
    }

    // Add cost based on CPU Cores (Price increases by 1$ per core)
    const cpuPrice = cpuCores * 1;

    // Add cost based on RAM (Price increases by 2$ per GB)
    const ramPrice = ram * 2;

    // Add cost based on SSD Size (Price increases by 4$ per 20GB)
    const ssdPrice = Math.ceil(ssdSize / 20) * 4;

    // Calculate the total price
    const totalPrice = basePrice + cpuPrice + ramPrice + ssdPrice;
    setPrice(totalPrice);
  };

  // Recalculate price when any selection changes
  useEffect(() => {
    calculatePrice();
  }, [serverType, cpuCores, ram, ssdSize]);

  return (
    <div
      ref={sectionRef}
      className="mx-5 rounded-2xl bg-gradient-to-br from-primary to-blue-200 px-5 py-10 md:container md:mx-auto md:py-20"
    >
      <h1 className="text-center text-2xl font-semibold text-white md:text-4xl">
        Transparent Pricing: VPS Server Plans
      </h1>
      <p className="mt-4 text-center font-medium text-white md:text-lg">
        Our VPS hosting options with 5TB traffic or 50Mbit/sec unmetered on all
        plans, tailored for various needs.
      </p>

      <div className="mx-auto mt-12 rounded-md bg-white p-8 shadow-lg md:w-1/2">
        <h5 className="text-center text-xl font-semibold md:text-2xl">
          Choose Server Specs
        </h5>
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
          {/* Server Type Select */}
          <div className="">
            <label
              htmlFor="server-type"
              className="mt-2.5 inline-block text-sm font-semibold"
            >
              Server Type:
            </label>
            <select
              id="server-type"
              value={serverType}
              className="mt-2.5 w-full flex-1 rounded border px-4 py-2 text-black focus:outline-none"
              onChange={(e) => setServerType(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Dedicated">Dedicated</option>
              <option value="Burstable">Burstable</option>
            </select>
          </div>

          {/* CPU Cores Select */}
          <div className="">
            <label
              htmlFor="cpu-cores"
              className="mt-2.5 inline-block text-sm font-semibold"
            >
              CPU Cores:
            </label>
            <select
              id="cpu-cores"
              value={cpuCores}
              className="mt-2.5 w-full flex-1 rounded border px-4 py-2 text-black focus:outline-none"
              onChange={(e) => setCpuCores(parseInt(e.target.value))}
            >
              {[...Array(32).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Core(s)
                </option>
              ))}
            </select>
          </div>

          {/* RAM Select */}
          <div className="">
            <label
              htmlFor="ram"
              className="mt-2.5 inline-block text-sm font-semibold"
            >
              RAM (GB):
            </label>
            <select
              id="ram"
              value={ram}
              className="mt-2.5 w-full flex-1 rounded border px-4 py-2 text-black focus:outline-none"
              onChange={(e) => setRam(parseInt(e.target.value))}
            >
              {[...Array(128).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1} GB
                </option>
              ))}
            </select>
          </div>

          {/* SSD Size Select */}
          <div className="">
            <label
              htmlFor="ssd-size"
              className="mt-2.5 inline-block text-sm font-semibold"
            >
              SSD Size (GB):
            </label>
            <select
              id="ssd-size"
              value={ssdSize}
              className="mt-2.5 w-full flex-1 rounded border px-4 py-2 text-black focus:outline-none"
              onChange={(e) => setSsdSize(parseInt(e.target.value))}
            >
              {[...Array(101).keys()].map((i) => (
                <option key={i} value={(i + 1) * 20}>
                  {(i + 1) * 20} GB
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display the final price */}
        <div className="mt-8">
          <h5 className="text-center text-xl font-semibold">
            Total Price: ${price}
          </h5>
        </div>
      </div>
    </div>
  );
}
