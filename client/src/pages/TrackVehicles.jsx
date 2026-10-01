import React from "react";
import { motion } from "framer-motion";

// Vehicle Images
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
  // ----------------------------------------------------------
  // OPEN TRACKING WEBSITE
  // ----------------------------------------------------------

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
        <div className="relative mx-auto max-w-7xl px-6 py-12 text-center sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Icon + Title in One Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              {/* Truck Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl shadow-xl backdrop-blur-md sm:h-20 sm:w-20 sm:text-4xl"
              >
                🚛
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-4xl">
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

      <section className="mx-auto px-5 py-14 sm:px-6 lg:px-8 lg:py-10 bg-gray-900 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Our Transportation Fleet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Choose a vehicle to access its official tracking portal and monitor
            transportation operations.
          </p>
        </motion.div>

        {/* ====================================================
            VEHICLE GRID
        ==================================================== */}

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
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* ==============================================
                  VEHICLE IMAGE
              ============================================== */}

              <button
                type="button"
                onClick={() => openTracking(vehicle.trackingUrl)}
                className="relative block w-full cursor-pointer overflow-hidden text-left"
                aria-label={`Track ${vehicle.vehicleNumber}`}
              >
                {/* Image */}
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.vehicleNumber}`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Tracking Badge */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-green-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
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
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-xl"
                  >
                    📍
                  </motion.div>
                </div>
              </button>

              {/* ==============================================
                  CARD CONTENT
              ============================================== */}

              <div className="p-6">
                {/* Vehicle Name */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                    {vehicle.brand}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    {vehicle.vehicleType}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {vehicle.description}
                  </p>
                </div>

                {/* ============================================
                    VEHICLE INFORMATION
                ============================================ */}

                <div className="mb-6 grid grid-cols-2 gap-3">
                  {/* Vehicle Number */}
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

                  {/* Tracking Provider */}
                  <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📍</span>

                      <p className="text-xs font-medium text-green-700">
                        Tracking
                      </p>
                    </div>

                    <p className="mt-2 text-sm font-bold text-green-800">
                      {vehicle.trackingName}
                    </p>
                  </div>
                </div>

                {/* ============================================
                    TRACK VEHICLE BUTTON
                ============================================ */}

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

                {/* Portal Text */}
                <p className="mt-3 text-center text-xs text-gray-400">
                  Opens {vehicle.trackingName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================
          INFORMATION SECTION
      ====================================================== */}

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
            🚚
          </div>

          {/* Heading */}
          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            Reliable Transportation
          </h3>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Chandra Enterprises uses modern vehicle tracking technology to
            improve transportation visibility, fleet monitoring, and delivery
            management.
          </p>
        </div>
      </section>

      {/* ======================================================
          FOOTER SPACE
      ====================================================== */}

      <div className="h-8 bg-white" />
    </div>
  );
};

export default TrackVehicles;
