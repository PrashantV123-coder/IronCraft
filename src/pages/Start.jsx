import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IronCraftLogo.webp";
import Shutter from "../assets/shutters.webp";
import Grill from "../assets/grills.webp";
import Gate from "../assets/gate.webp";
import Window from "../assets/window.webp";
import Ladder from "../assets/ladders.webp";
import welding from "../assets/welding.webp";
import cutting from "../assets/cutting.webp";
import Header from "../components/UserHeader";
import Footer from "../components/Footer";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-35 h-16" />

            <div>
              <h1 className="text-2xl font-bold text-gray-800"></h1>

              <p className="text-sm text-gray-500"></p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              to="/user-login"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
            <Link
              to="/admin-start"
              className="bg-rose-400 text-white px-5 py-2 rounded-lg hover:bg-rose-500 transition"
            >
              Be Seller
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Modern Fabrication <br /> For Every Need
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Order custom gates, windows, grills, shutters, ladders, and
            fabrication services with ease.
          </p>

          {/* Products */}
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Products
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Shutter}
                  loading="lazy"
                  alt="Shutter"
                />
                <h3 className="mt-2 text-lg font-medium">Shutter</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Grill}
                  loading="lazy"
                  alt="Grill"
                />
                <h3 className="mt-2 text-lg font-medium">Grill</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Gate}
                  loading="lazy"
                  alt="Gate"
                />
                <h3 className="mt-2 text-lg font-medium">Gate</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Window}
                  loading="lazy"
                  alt="Window"
                />
                <h3 className="mt-2 text-lg font-medium">Window</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Ladder}
                  loading="lazy"
                  alt="Ladder"
                />
                <h3 className="mt-2 text-lg font-medium">Ladder</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={welding}
                  loading="lazy"
                  alt="Welding"
                />
                <h3 className="mt-2 text-lg font-medium">Welding</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={cutting}
                  loading="lazy"
                  alt="Cutting"
                />
                <h3 className="mt-2 text-lg font-medium">Cutting</h3>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-4 flex justify-center gap-4">
            <Link
              to="/user-login"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Start;
