import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IronCraftLogo.png";
import Shutter from "../assets/shutters.png";
import Grill from "../assets/grills.png";
import Gate from "../assets/gate.png";
import Window from "../assets/window.png";
import Ladder from "../assets/ladders.avif";
import welding from "../assets/welding.png";
import cutting from "../assets/cutting.png";
import Header from "../components/UserHeader";
import Footer from "../components/Footer";
import CoverImg from "../assets/coverimg.png";

const AdminStart = () => {
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

          <div className="">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Build-Deliver-Grow</h1>

            <p className="text-sm text-gray-500">Customise products and services...</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              to="/admin-login"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <div className="flex items-center mt-10 gap-30 justify-center">
            <h2 className="text-5xl font-semibold text-gray-800 leading-tight">
              Modern Fabrication <br /> For Every Need
            </h2>
            <img
              src={CoverImg}
              alt="coverImg"
              className="rounded-md shadow-md"
            />
          </div>

          <p className="mt-6 text-gray-600 text-lg">
            List custom design gates, windows, grills, shutters, ladders, and
            fabrication services with ease.
          </p>

          {/* Products */}
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Example Products you can go with
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Shutter}
                  alt="Shutter"
                />
                <h3 className="mt-2 text-lg font-medium">Shutter</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Grill}
                  alt="Grill"
                />
                <h3 className="mt-2 text-lg font-medium">Grill</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Gate}
                  alt="Gate"
                />
                <h3 className="mt-2 text-lg font-medium">Gate</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Window}
                  alt="Window"
                />
                <h3 className="mt-2 text-lg font-medium">Window</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={Ladder}
                  alt="Ladder"
                />
                <h3 className="mt-2 text-lg font-medium">Ladder</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={welding}
                  alt="Welding"
                />
                <h3 className="mt-2 text-lg font-medium">Welding</h3>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={cutting}
                  alt="Cutting"
                />
                <h3 className="mt-2 text-lg font-medium">Cutting</h3>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-4 flex justify-center gap-4">
            <Link
              to="/admin-login"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-6 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Why should you use IronCraft?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
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
