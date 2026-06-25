import React, { useEffect, lazy } from "react";
const AdminHeader = lazy(() => import("../components/AdminHeader"));
const Footer = lazy(() => import("../components/Footer"));

import { Link } from "react-router-dom";
import {
  fetchBookSlots,
  updateBookSlotStatus,
  removeBookSlot,
} from "../features/bookSlotSlice";

import { useDispatch, useSelector } from "react-redux";

const AdminBookSlots = () => {
  const dispatch = useDispatch();

  const { bookSlotData: slots, loading } = useSelector(
    (state) => state.bookSlots,
  );

  useEffect(() => {
    dispatch(fetchBookSlots());
  }, [dispatch]);

  return (
    <div>
      <AdminHeader />

      <div className="bg-gray-200 min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl p-5">All Service Bookings</h2>

          <Link to="/admin-home" className="underline text-red-500 mr-8">
            Close
          </Link>
        </div>

        {loading && <p className="text-center text-lg">Loading Bookings...</p>}

        {!loading &&
          slots.map((slot) => (
            <div
              key={slot._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 m-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {slot.service}
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Customer:</span> {slot.name}
                  </p>

                  <p>
                    <span className="font-semibold">Date:</span> {slot.date}
                  </p>

                  <p>
                    <span className="font-semibold">Time:</span> {slot.time}
                  </p>

                  <p>
                    <span className="font-semibold">Contact:</span>{" "}
                    {slot.contact}
                  </p>

                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    <select
                      value={slot.status}
                      onChange={(e) =>
                        dispatch(
                          updateBookSlotStatus({
                            id: slot._id,
                            status: e.target.value,
                          }),
                        )
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="pending">Pending</option>

                      <option value="approved">Approved</option>

                      <option value="completed">Completed</option>

                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button
                    onClick={() => dispatch(removeBookSlot(slot._id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-3"
                  >
                    Delete Booking
                  </button>
                </div>
              </div>

              {slot.selectedImage && (
                <div>
                  <img
                    src={slot.selectedImage}
                    alt="service"
                    className="w-40 h-40 object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default AdminBookSlots;
