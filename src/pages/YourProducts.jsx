import React, { lazy, useEffect, useCallback } from "react";
const Footer = lazy(() => import("../components/Footer"));
import AdminHeader from "../components/AdminHeader";

import { useSelector, useDispatch } from "react-redux";
import { fetchDesigns, removeProduct } from "../features/designSlice";
import { Link, useNavigate } from "react-router-dom";

const YourProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { designs, loading, error } = useSelector(
    (state) => state.design
  );

  useEffect(() => {
    dispatch(fetchDesigns());
  }, [dispatch]);

  const handleEdit = useCallback(
    (design) => {
      navigate("/edit-listed-product", {
        state: {
          design,
        },
      });
    },
    [navigate]
  );

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
  }

  return (
    <div>
      <AdminHeader />

      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl p-5">
          Your Products
        </h2>

        <Link
          to="/admin-home"
          className="underline text-red-500 mr-8"
        >
          Close
        </Link>
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={design.url}
                  alt={design.productName}
                  loading="lazy"
                  className="w-full h-72 object-cover cursor-pointer group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {design.productName}
                </h2>

                <p className="text-gray-600 text-sm mb-2">
                  {design.description}
                </p>

                <p className="text-gray-800 text-sm mb-2">
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {design.category}
                </p>

                <p className="text-gray-800 text-sm mb-4 font-semibold">
                  <span className="font-semibold">
                    Uses:
                  </span>{" "}
                  {design.uses}
                </p>
              </div>

              <div className="flex items-center justify-between p-4">
                <button
                  className="bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-500 transition cursor-pointer"
                  onClick={() => handleEdit(design)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-500 transition cursor-pointer"
                  onClick={() => handleDelete(design._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YourProducts;