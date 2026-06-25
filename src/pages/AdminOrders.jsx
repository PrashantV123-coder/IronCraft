import React, { useEffect, lazy } from "react";
const AdminHeader = lazy(() => import("../components/AdminHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { Link } from "react-router-dom";
import { fetchOrders, updateStatus, removeOrder } from "../features/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminOrders = () => {
  const dispatch = useDispatch();

  const { orderData: orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <AdminHeader />

      <div className="bg-gray-200 min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl p-5">Orders</h2>

          <Link to="/admin-home" className="underline text-red-500 mr-8">
            Close
          </Link>
        </div>

        {loading && <p className="text-center text-lg">Loading Orders...</p>}

        {!loading &&
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 m-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {order.product}
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Customer:</span>{" "}
                    {order.name}
                  </p>

                  <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {order.quantity}
                  </p>

                  <p>
                    <span className="font-semibold">Size:</span> {order.size}
                  </p>

                  <p>
                    <span className="font-semibold">Contact:</span>{" "}
                    {order.contact}
                  </p>

                  <div>
                    <span className="font-semibold">Status:</span>{" "}
                    <select
                      value={order.status}
                      onChange={(e) =>
                        dispatch(
                          updateStatus({
                            id: order._id,
                            status: e.target.value,
                          }),
                        )
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="pending">Pending</option>
                      <option value="progress">Progress</option>
                      <option value="complete">Complete</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button
                    onClick={() => dispatch(removeOrder(order._id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-3"
                  >
                    Delete Order
                  </button>
                </div>
              </div>

              {order.selectedImage && (
                <div>
                  <img
                    src={order.selectedImage}
                    alt="design"
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

export default AdminOrders;
