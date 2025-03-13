import React, { useState, useEffect } from 'react';
import BannerImage from "../../assets/custom-vps-banner.svg";


export default function CustomVps() {
  // State for server specifications
  const [serverType, setServerType] = useState('General');
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
      case 'General':
        basePrice = 4;
        break;
      case 'Dedicated':
        basePrice = 6;
        break;
      case 'Burstable':
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
    <section className="mx-5 md:container md:mx-auto py-10 md:py-20">
      <h1 className='text-2xl md:text-4xl font-semibold text-primary text-center'>Transparent Pricing: VPS Server Plans</h1>
      <p className='mt-4 md:text-xl font-semibold text-center'>Our VPS hosting options with 5TB traffic or 50Mbit/sec unmetered on all plans, tailored for various needs.</p>

      <div className='flex flex-col gap-8 md:flex-row md:gap-16 md:items-center md:justify-between mt-10 md:mt-20'>
        <div className='p-8 shadow rounded md:w-1/2 bg-gradient-to-tr from-primary to-blue-200 text-white'>
          <h5 className='text-xl md:text-2xl font-semibold text-center'>Choose Server Specs</h5>
          {/* Server Type Select */}
          <div className="">
            <label htmlFor="server-type" className='mt-2.5 inline-block font-semibold text-sm'>Server Type:</label>
            <select 
              id="server-type" 
              value={serverType} 
              className="px-4 py-2 border border-primary rounded w-full mt-2.5 flex-1 focus:outline-none text-black"
              onChange={(e) => setServerType(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Dedicated">Dedicated</option>
              <option value="Burstable">Burstable</option>
            </select>
          </div>

          {/* CPU Cores Select */}
          <div className="">
            <label htmlFor="cpu-cores" className='mt-2.5 inline-block font-semibold text-sm'>CPU Cores:</label>
            <select 
              id="cpu-cores" 
              value={cpuCores} 
              className="px-4 py-2 border border-primary rounded w-full mt-2.5 flex-1 focus:outline-none text-black"
              onChange={(e) => setCpuCores(parseInt(e.target.value))}
            >
              {[...Array(32).keys()].map(i => (
                <option key={i} value={i + 1}>{i + 1} Core(s)</option>
              ))}
            </select>
          </div>

          {/* RAM Select */}
          <div className="">
            <label htmlFor="ram" className='mt-2.5 inline-block font-semibold text-sm'>RAM (GB):</label>
            <select 
              id="ram" 
              value={ram} 
              className="px-4 py-2 border border-primary rounded w-full mt-2.5 flex-1 focus:outline-none text-black"
              onChange={(e) => setRam(parseInt(e.target.value))}
            >
              {[...Array(128).keys()].map(i => (
                <option key={i} value={i + 1}>{i + 1} GB</option>
              ))}
            </select>
          </div>

          {/* SSD Size Select */}
          <div className="">
            <label htmlFor="ssd-size" className='mt-2.5 inline-block font-semibold text-sm'>SSD Size (GB):</label>
            <select 
              id="ssd-size" 
              value={ssdSize} 
              className="px-4 py-2 border border-primary rounded w-full mt-2.5 flex-1 focus:outline-none text-black"
              onChange={(e) => setSsdSize(parseInt(e.target.value))}
            >
              {[...Array(101).keys()].map(i => (
                <option key={i} value={(i + 1) * 20}>{(i + 1) * 20} GB</option>
              ))}
            </select>
          </div>

          {/* Display the final price */}
          <div className='mt-8'>
            <h5 className='text-xl md:text-2xl font-semibold text-center'>Total Price: ${price}</h5>
          </div>
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </section>
  );
}
