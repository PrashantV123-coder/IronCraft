import React from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";

import Shutter from "../assets/shutters.png";
import Grill from "../assets/grills.png";
import Gate from "../assets/gate.png";
import Window from "../assets/window.png";
import Ladder from "../assets/ladders.avif";
import welding from "../assets/welding.png";
import cutting from "../assets/cutting.png";
import { Link, useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <UserHeader />
      <div className="bg-gray-100 w-auto h-screen">
        <h2 className="text-blue-600 text-2xl font-semibold mt-2 ml-140 mb-6">
          Order Custom Services
        </h2>
        <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/shutter-products")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={Shutter}
              alt="Shutter"
            />
            <h3 className="mt-2 text-lg font-medium ">Shutter</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/grill-products")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={Grill}
              alt="Grill"
            />
            <h3 className="mt-2 text-lg font-medium">Grill</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/gate-products")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={Gate}
              alt="Gate"
            />
            <h3 className="mt-2 text-lg font-medium">Gate</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/window-products")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={Window}
              alt="Window"
            />
            <h3 className="mt-2 text-lg font-medium">Window</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/ladder-products")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={Ladder}
              alt="Ladder"
            />
            <h3 className="mt-2 text-lg font-medium">Ladder</h3>
          </div>
        </div>

        <h2 className="text-rose-500 text-2xl font-semibold ml-140 mt-14 mb-6">
          Book for Maintenance
        </h2>
        <div className="flex flex-wrap mt-4 items-center justify-center gap-12">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/welding-types")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={welding}
              alt="Welding"
            />
            <h3 className="mt-2 text-lg font-medium">Welding</h3>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/other-services")}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={cutting}
              alt="Cutting"
            />
            <h3 className="mt-2 text-lg font-medium">Other Services</h3>
          </div>
        </div>

        <div className="ml-140 mt-15 flex items-center gap-5">
          <Link to="/my-orders" className="bg-yellow-500 hover:bg-yellow-600 rounded-md px-5 py-2">Orders</Link>
          <Link to="/booked-slots" className="bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-2">Booked Slots</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;
