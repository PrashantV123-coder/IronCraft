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
import CoverImg from "../assets/coverimg.webp";

const AdminStart = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full lg:w-auto">
            <img
              src={logo}
              alt="Logo"
              className="w-24 sm:w-32 lg:w-36 h-auto"
            />

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800"></h1>
              <p className="text-xs sm:text-sm text-gray-500"></p>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center px-2">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build-Deliver-Grow
            </h1>

            <p className="text-xs sm:text-sm text-gray-500">
              Customise products and services...
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center w-full lg:w-auto">
            <Link
              to="/admin-login"
              className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-7xl w-full">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center mt-10 gap-10 justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
              Modern Fabrication <br /> For Every Need
            </h2>

            <img
              src={CoverImg}
              alt="coverImg"
              className="rounded-md shadow-md w-full max-w-md"
            />
          </div>

          <p className="mt-6 text-gray-600 text-base sm:text-lg px-2">
            List custom design gates, windows, grills, shutters, ladders, and
            fabrication services with ease.
          </p>

          {/* Products */}
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Example Products you can go with
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={Shutter}
                  alt="Shutter"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">
                  Shutter
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={Grill}
                  alt="Grill"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">Grill</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={Gate}
                  alt="Gate"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">Gate</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={Window}
                  alt="Window"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">
                  Window
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={Ladder}
                  alt="Ladder"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">
                  Ladder
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={welding}
                  alt="Welding"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">
                  Welding
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                  src={cutting}
                  alt="Cutting"
                />
                <h3 className="mt-2 text-base sm:text-lg font-medium">
                  Cutting
                </h3>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 mb-4 flex justify-center gap-4">
            <Link
              to="/admin-login"
              className="bg-black text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8 mt-10 mb-6 border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Why should you use IronCraft?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-gray-100 p-4 rounded-xl">
                Increase Your Business Visibility
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Reach More Local Customers
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Showcase Products Professionally
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Get More Orders & Enquiries
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Easy Product & Service Listing
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Build Trust with Customers
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Highlight Custom Fabrication Work
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Promote Special Offers & Services
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Manage Orders Efficiently
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Display Workshop Expertise Online
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Grow Your Fabrication Business Faster
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                Connect Directly with Buyers
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminStart;
