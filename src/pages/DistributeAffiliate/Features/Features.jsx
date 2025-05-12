import {
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiHardDrive,
  FiLayers,
  FiZap,
} from "react-icons/fi";

const featuresData = [
  {
    icon: FiZap,
    title: "Maximum performance",
    subtitle: "No ifs, no buts - just raw computing power when you need it",
    bgColor: "red-100",
    shapeColor: "red-600",
  },
];

export default function Features() {
  return (
    <div className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We provide the raw power your clients demand, with no compromises
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 - Performance */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                <FiZap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Maximum performance
              </h3>
              <p className="mt-2 text-gray-600">
                No ifs, no buts - just raw computing power when you need it
              </p>
            </div>
          </div>

          {/* Feature 2 - CPUs */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <FiCpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Powerful Intel® CPUs
              </h3>
              <p className="mt-2 text-gray-600">
                Latest generation processors for unbeatable performance
              </p>
            </div>
          </div>

          {/* Feature 3 - Cores */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600">
                <FiLayers className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Up to 16 Cores
              </h3>
              <p className="mt-2 text-gray-600">
                Handle even the most demanding workloads with ease
              </p>
            </div>
          </div>

          {/* Feature 4 - RAM */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <FiDatabase className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Up to 256GB DDR4 RAM
              </h3>
              <p className="mt-2 text-gray-600">
                Lightning-fast memory for your memory-intensive applications
              </p>
            </div>
          </div>

          {/* Feature 5 - Storage */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <FiHardDrive className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                SATA, SSD or NVMe
              </h3>
              <p className="mt-2 text-gray-600">
                Choose the perfect storage solution for your needs
              </p>
            </div>
          </div>

          {/* Feature 6 - Network */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-100 opacity-30 transition-all duration-500 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                <FiGlobe className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Up to 1 Gbit/s Network
              </h3>
              <p className="mt-2 text-gray-600">
                Blazing-fast network speeds with unlimited traffic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
