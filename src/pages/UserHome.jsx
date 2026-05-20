import React from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";

import Shutter from "../assets/shutters.webp";
import Grill from "../assets/grills.webp";
import Gate from "../assets/gate.webp";
import Window from "../assets/window.webp";
import Ladder from "../assets/ladders.webp";
import welding from "../assets/welding.webp";
import cutting from "../assets/cutting.webp";
import { Link, useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader />

      <div className="bg-gray-100 flex-1 px-4 sm:px-6 lg:px-10 py-6">
        {/* Custom Services */}
        <h2 className="text-blue-600 text-2xl sm:text-3xl font-semibold text-center mb-6">
          Order Custom Services
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/shutter-products")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={Shutter}
              alt="Shutter"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Shutter</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/grill-products")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={Grill}
              alt="Grill"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Grill</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/gate-products")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={Gate}
              alt="Gate"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Gate</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/window-products")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={Window}
              alt="Window"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Window</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/ladder-products")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={Ladder}
              alt="Ladder"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Ladder</h3>
          </div>
        </div>

        {/* Maintenance */}
        <h2 className="text-rose-500 text-2xl sm:text-3xl font-semibold text-center mt-10 mb-6">
          Book for Maintenance
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/welding-types")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={welding}
              alt="Welding"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">Welding</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/other-services")}
          >
            <img
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              src={cutting}
              alt="Cutting"
            />

            <h3 className="mt-2 text-base sm:text-lg font-medium">
              Other Services
            </h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/my-orders"
            className="bg-yellow-500 hover:bg-yellow-600 rounded-md px-5 py-2 w-full sm:w-auto text-center"
          >
            Orders
          </Link>

          <Link
            to="/booked-slots"
            className="bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-2 w-full sm:w-auto text-center"
          >
            Booked Slots
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserHome;
