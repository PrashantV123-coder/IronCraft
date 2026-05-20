import React, { useEffect, lazy } from "react";
const AdminHeader = lazy(() => import("../components/AdminHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { Link } from "react-router-dom";
import { getBookSlot, updateBookSlotStatus, removeBookSlot } from "../features/bookSlotSlice"; 
import { useDispatch, useSelector } from "react-redux";


const AdminBookSlots = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookSlot());
  }, []);

  const orders = useSelector((state) => state.bookSlots.bookSlotData);

  return (
    <div>
      <AdminHeader />

      <div className="bg-gray-200 w-auto mx-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl flex items-center justify-center p-5">
            All Slots for service
          </h2>
          <Link to="/admin-home" className="underline text-red-500 mr-8">
            close
          </Link>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 m-6 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  {order.service}
                </h2>
              </div>

              <div className="mt-4 space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Customer:</span> {order.name}
                </p>

                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {order.date}
                </p>

                <p>
                  <span className="font-semibold">Time:</span> {order.time}
                </p>

                <p>
                  <span className="font-semibold">Contact:</span>{" "}
                  {order.contact}
                </p>

                <div>
                  <span className="font-semibold mb-1">Status:</span>{" "}
                  <select
                    value={order.status}
                    onChange={(e) =>
                      dispatch(
                        updateBookSlotStatus({
                          id: order.id,
                          status: e.target.value,
                        }),
                      )
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="complete">Complete</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <button
                  onClick={() => dispatch(removeBookSlot(order.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-3"
                >
                  Delete Order
                </button>
              </div>
            </div>

            <div>
              <img
                src={order.selectedImage}
                alt="design"
                className="w-40 h-40 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default AdminBookSlots;