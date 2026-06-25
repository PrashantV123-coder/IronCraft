import React, { lazy, useEffect } from "react";
const UserHeader = lazy(() => import("../components/UserHeader"));
const Footer = lazy(() => import("../components/Footer"));
import { useSelector, useDispatch } from "react-redux";
import { fetchDesigns } from "../features/designSlice";
import { Link } from "react-router-dom";
import OrderService from "./OrderService";

const OtherServices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDesigns());
  }, [dispatch]);

  const designs = useSelector((state) => state.design.designs);

  const imageUrls = designs.filter((item) => item.category === "otherservices");

  return (
    <div className="">
      <UserHeader />
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl flex items-center justify-center p-5">
          Other Services Available .
        </h2>
        <Link to="/user-home" className="underline text-red-500 mr-8">
          close
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageUrls.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.productData.url}
                  alt={item.productName}
                  loading="lazy"
                  className="w-full h-72 object-cover cursor-pointer group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.productName}
                </h2>

                <p className="text-gray-600 text-sm mb-2">{item.productData.description}</p>

                {/* <p className="text-gray-800 text-sm mb-4 font-semibold">
                  <span className="font-semibold">Uses:</span> {data.uses}
                </p> */}

                <div className="flex items-center justify-center">
                  <Link
                    to="/book-slot"
                    state={{
                      selectedImage: item.productData.url,
                      description: item.productData.description,
                      product: item.productName,
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

export default OtherServices;
