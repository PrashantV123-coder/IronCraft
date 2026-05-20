import React, {lazy} from "react";
const UserHeader = lazy(() => import("../components/UserHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { useSelector, useDispatch } from "react-redux";
import { removeProducts } from "../features/designSlice";
import { data, Link } from "react-router-dom";
import OrderService from "./OrderService";
import AdminHeader from "../components/AdminHeader";

const YourServices = () => {
  const dispatch = useDispatch();

  const welding = useSelector((state) => state.design.urls.welding || {});

  const otherservices = useSelector(
    (state) => state.design.urls.otherservices || {},
  );

  const categories = {
    welding,
    otherservices,
  }

  const services = Object.entries(categories).flatMap(([category, products]) => 
    Object.entries(products).map(([type, data]) => ({
      category,
      type,
      data
    }))
  );


  return (
    <div className="">
      <AdminHeader />
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl flex items-center justify-center p-5">
          Your Services
        </h2>
        <Link to="/admin-home" className="underline text-red-500 mr-8">
          close
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ category, type, data }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={data.url}
                  alt={type}
                  loading="lazy"
                  className="w-full h-72 object-cover cursor-pointer group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {type}
                </h2>

                <p className="text-gray-600 text-sm mb-2">{data.description}</p>

                <p className="text-gray-800 text-sm mb-4 font-semibold">
                  <span className="font-semibold">Uses:</span> {data.uses}
                </p>
              </div>

              <div className="flex items-center justify-between p-4">
                <Link
                  className="bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-500 transition cursor-pointer"
                  to="/edit-listed-product"
                  state={{
                    category: category,
                    productName: type,
                    productData: data,
                  }}
                >
                  Edit
                </Link>

                <button
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-500 transition cursor-pointer"
                  onClick={() =>
                    dispatch(
                      removeProducts({
                        category,
                        productName: type,
                      }),
                    )
                  }
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

export default YourServices;
