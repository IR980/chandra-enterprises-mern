import React from "react";
import { motion } from "framer-motion";

// ============================================================
// VEHICLE IMAGES
// ============================================================

import ashokImage from "../assets/vehicles/ashok.jpeg";
import eicherImage from "../assets/vehicles/eicher.jpeg";
import tataImage from "../assets/vehicles/tata.jpeg";

// ============================================================
// VEHICLE DATA
// ============================================================

const vehicles = [
  {
    id: 1,
    vehicleNumber: "CE Truck 01",
    vehicleType: "Ashok Leyland 1916 HE",
    description:
      "Chandra Enterprises transportation vehicle equipped with Ashok Leyland vehicle tracking.",
    image: ashokImage,
    trackingName: "Ashok Leyland iAlert",
    trackingUrl: "https://ialert.ashokleyland.com/login",
    brand: "Ashok Leyland",
  },

  {
    id: 2,
    vehicleNumber: "CE Truck 02",
    vehicleType: "EICHER",
    description:
      "Chandra Enterprises transportation vehicle equipped with Eicher vehicle tracking.",
    image: eicherImage,
    trackingName: "Eicher GPS Tracking",
    trackingUrl: "https://www.myeicher.in/kam-portal/home/landing-page",
    brand: "EICHER",
  },

  {
    id: 3,
    vehicleNumber: "CE Truck 03",
    vehicleType: "TATA",
    description:
      "Chandra Enterprises transportation vehicle equipped with TATA vehicle tracking.",
    image: tataImage,
    trackingName: "TATA GPS Tracking",
    trackingUrl: "https://fleetedge.home.tatamotors/auth/login",
    brand: "TATA",
  },
];

// ============================================================
// TRACK VEHICLES PAGE
// ============================================================

const TrackVehicles = () => {
  // ==========================================================
  // OPEN TRACKING WEBSITE
  // ==========================================================

  const openTracking = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-green-50">
      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-r from-green-950 via-green-900 to-green-800 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* ==================================================
                ICON + TITLE
            ================================================== */}

            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {/* Truck Icon */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -15,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl shadow-xl backdrop-blur-md sm:h-18 sm:w-18 sm:text-4xl"
              >
                🚛
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
                Track Our Vehicles
              </h1>
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-green-100 sm:text-base">
              Monitor our transportation fleet through the respective vehicle
              tracking portals. Select your vehicle below to access its tracking
              system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          VEHICLE SECTION
      ====================================================== */}

      <section className="bg-gray-950 px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-12 text-center"
          >
            <div className="mb-3 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs font-semibold uppercase tracking-widest text-green-300">
                Fleet Management
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Transportation Fleet
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Choose a vehicle to access its official tracking portal and
              monitor transportation operations.
            </p>
          </motion.div>

          {/* ==================================================
              VEHICLE GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* ==================================================
                    VEHICLE IMAGE
                ================================================== */}

                <button
                  type="button"
                  onClick={() => openTracking(vehicle.trackingUrl)}
                  className="relative block w-full cursor-pointer overflow-hidden text-left"
                  aria-label={`Track ${vehicle.vehicleNumber}`}
                >
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.vehicleNumber}`}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-72"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Tracking Badge */}
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      Live Tracking
                    </span>
                  </div>

                  {/* Bottom Image Content */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-green-300">
                        Vehicle
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        {vehicle.vehicleNumber}
                      </h3>
                    </div>

                    {/* Location Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-xl"
                    >
                      📍
                    </motion.div>
                  </div>
                </button>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div className="flex flex-1 flex-col p-6">
                  {/* Vehicle Name */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {vehicle.brand}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-gray-900">
                      {vehicle.vehicleType}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* ==================================================
                      VEHICLE INFORMATION
                  ================================================== */}

                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {/* Vehicle */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🚛</span>

                        <p className="text-xs font-medium text-gray-500">
                          Vehicle
                        </p>
                      </div>

                      <p className="mt-2 text-sm font-bold text-gray-900">
                        {vehicle.vehicleNumber}
                      </p>
                    </div>

                    {/* Tracking */}
                    <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">📍</span>

                        <p className="text-xs font-medium text-green-700">
                          Tracking
                        </p>
                      </div>

                      <p className="mt-2 text-xs font-bold leading-5 text-green-800">
                        {vehicle.trackingName}
                      </p>
                    </div>
                  </div>

                  {/* ==================================================
                      TRACK BUTTON
                  ================================================== */}

                  <div className="mt-auto">
                    <motion.button
                      type="button"
                      onClick={() => openTracking(vehicle.trackingUrl)}
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-700 px-5 py-4 font-bold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:bg-green-800 hover:shadow-xl"
                    >
                      <span className="text-xl">📍</span>

                      <span>Track Vehicle</span>

                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>

                    <p className="mt-3 text-center text-xs text-gray-400">
                      Opens {vehicle.trackingName}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          VCMS VEHICLE MANAGEMENT SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-green-950 to-green-900 py-16 sm:py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-3xl" />
        </div>

        {/* VCMS Content */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* ==================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs font-semibold uppercase tracking-widest text-green-300">
                    Vehicle Management System
                  </span>
                </div>

                {/* Icon + Heading */}
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl shadow-lg backdrop-blur-md"
                  >
                    🛡️
                  </motion.div>

                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Vehicle Compliance
                  </h2>
                </div>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base lg:mx-0">
                  Manage your complete vehicle documentation and expiry dates
                  from one centralized Vehicle Compliance Management System.
                </p>

                {/* Features */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-gray-200">
                    📄 Documents
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-gray-200">
                    ⏰ Expiry Dates
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-gray-200">
                    🚛 Vehicle Records
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-gray-200">
                    🔔 Renewals
                  </span>
                </div>
              </div>

              {/* ==================================================
                  VCMS BUTTON
              ================================================== */}

              <div className="flex shrink-0 flex-col items-center">
                <motion.a
                  href="https://vcms-frontend.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative flex min-w-55 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-yellow-400 to-amber-500 px-7 py-4 font-bold text-gray-950 shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:shadow-yellow-400/40"
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex items-center gap-3">
                    <span className="text-xl">🛡️</span>

                    <span>Open VCMS</span>

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </motion.a>

                <p className="mt-3 text-center text-xs text-gray-400">
                  Secure VCMS Login Portal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          BOTTOM INFORMATION
      ====================================================== */}

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
            🚚
          </div>

          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            Reliable Transportation
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Chandra Enterprises uses modern vehicle tracking technology to
            improve transportation visibility, fleet monitoring, and delivery
            management.
          </p>
        </div>
      </section>

      {/* Bottom Space */}
      <div className="h-8 bg-white" />
    </div>
  );
};

export default TrackVehicles;
