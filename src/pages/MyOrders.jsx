import React, { useEffect, lazy } from "react";
const UserHeader = lazy(() => import("../components/UserHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { Link } from "react-router-dom";
import { fetchOrders } from "../features/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const MyOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const { orderData, loading, error } = useSelector((state) => state.orders);

  if (loading) {
    return <div className="text-center mt-10">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen">
      <UserHeader />
      <div className="bg-gray-200 w-auto mx-h-screen">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-blue-500 font-semibold p-5">
            Your Orders
          </h1>
          <Link to="/user-home" className="p-5 text-red-500 underline">
            close
          </Link>
        </div>
        {orderData.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 m-5 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  {order.product}
                </h2>
              </div>

              <div className="mt-4 space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Customer:</span> {order.name}
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
                  <span className="font-semibold mb-1">Status:</span>{" "}
                  <span
                    className={`${order.status === "pending" ? "text-yellow-500" : order.status === "progress" ? "text-blue-500" : order.status === "complete" ? "text-green-500" : "text-red-500"}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src={order.selectedImage}
                alt="design"
                loading="lazy"
                className="w-40 h-40 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;
