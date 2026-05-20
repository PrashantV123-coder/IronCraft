import React from "react";
import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderService from "./OrderService";

const WeldingTypes = () => {
  const weldingTypes = useSelector((state) => state.design.urls.welding || {});
  //   console.log(weldingTypes);

  return (
    <div className="">
      <UserHeader />
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl flex items-center justify-center p-5">
          Choose welding method you prefer.
        </h2>
        <Link to="/user-home" className="underline text-red-500 mr-8">
          close
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(weldingTypes).map(([type, data], index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={data.url}
                  alt={type}
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

                <div className="flex items-center justify-center">
                  <Link
                    to="/book-slot"
                    state={{
                      selectedImage: data.url,
                      description: data.description,
                      product: type,
                    }}
                    className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Book Slot
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeldingTypes;
