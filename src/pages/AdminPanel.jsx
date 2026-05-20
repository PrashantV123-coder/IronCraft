import React, { useEffect, useState, lazy } from "react";
const AdminHeader = lazy(() => import("../components/AdminHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { Link } from "react-router-dom";
import { getAdminProfile } from "../features/profileSlice";
import { setSlot, getSlot, removeSlot } from "../features/slotTimingSlice";
import { useDispatch, useSelector } from "react-redux";
import sweetAlert from "sweetalert2";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const [slotData, setSlotData] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setSlotData({
      ...slotData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slotData.from || !slotData.to) {
      await sweetAlert.fire({
        icon: "error",
        title: "select both time fields!",
        text: "Please set both time fields below.",
        showConfirmButton: false,
        timer: 1800,
      });
      return;
    }

    dispatch(setSlot(slotData));

    await sweetAlert.fire({
      icon: "success",
      title: "Slot has been set!",
      text: "Your Slot has been set successfully.",
      showConfirmButton: false,
      timer: 1800,
    });

    setSlotData({
      from: "",
      to: "",
    });
  };

  useEffect(() => {
    dispatch(getAdminProfile());
    dispatch(getSlot());
  }, []);

  const adminData = useSelector((state) => state.profile.admin);
  const slotTimes = useSelector((state) => state.slot.slotVal);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminHeader />

      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome, {adminData.name}
            </h2>

            <p className="text-gray-600 text-lg">Email: {adminData.email}</p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Orders */}
            <Link
              to="/admin-orders"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Orders
              </h3>

              <p className="text-gray-600">
                View and manage all customer orders.
              </p>
            </Link>

            {/* Booking Slots */}
            <Link
              to="/admin-book-slots"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Booking Slots
              </h3>

              <p className="text-gray-600">
                Check all booked welding service slots.
              </p>
            </Link>

            {/* List Products */}
            <Link
              to="/list-products"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-rose-600 mb-3">
                List Products
              </h3>

              <p className="text-gray-600">List products for customers.</p>
            </Link>

            {/* list-services */}
            <Link
              to="/list-services"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
                List Services
              </h3>

              <p className="text-gray-600">List services for customers.</p>
            </Link>

            {/* Your Products */}
            <Link
              to="/your-products"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-black-600 mb-3">
                Your Products
              </h3>

              <p className="text-gray-600">Your products for customers.</p>
            </Link>

            {/* Your Services */}
            <Link
              to="/your-services"
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-black-600 mb-3">
                Your Services
              </h3>

              <p className="text-gray-600">Your services for customers.</p>
            </Link>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-300 mt-5 p-5 rounded-lg flex flex-col gap-4"
            >
              <h2 className="text-xl font-semibold">Set Slot</h2>

              <input
                type="time"
                name="from"
                id="from"
                value={slotData.from}
                onChange={handleChange}
                className="p-2 rounded hover:border-1 bg-gray-200"
              />

              <input
                type="time"
                name="to"
                id="to"
                value={slotData.to}
                onChange={handleChange}
                className="p-2 rounded hover:border-1 bg-gray-200"
              />

              <button
                type="submit"
                className="bg-blue-500 w-full sm:w-1/2 lg:w-1/4 text-white py-2 rounded cursor-pointer"
              >
                Save/Update
              </button>
            </form>

            <div className="bg-gray-300 mt-5 p-5 rounded-lg flex flex-col gap-4">
              <div className="bg-white h-auto rounded-md p-4 mt-4">
                <p className="mb-5 font-semibold">from: {slotTimes[0]?.from}</p>
                <p className="font-semibold">to: {slotTimes[0]?.to}</p>
              </div>
              <button
                onClick={() => dispatch(removeSlot())}
                className="bg-blue-500 w-1/4 text-white py-2 mt-4 rounded cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
