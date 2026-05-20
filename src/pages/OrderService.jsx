import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getOrders, setOrders } from "../features/orderSlice";

const OrderService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const selectedImageFromProps = location.state?.selectedImage || "";
  const productFromProps = location.state?.product || "";

  const [input, setInput] = useState({
    id: nanoid(),
    name: "",
    contact: "",
    product: productFromProps,
    quantity: "",
    size: "",
    selectedImage: selectedImageFromProps,
    status: "pending",
  });

  const [touched, setTouched] = useState({
    name: false,
    contact: false,
    product: false,
    quantity: false,
    size: false,
  });

  const [err, setErr] = useState({});

  // const [showImages, setShowImages] = useState(false);


  // const imageUrls = useSelector(
  //   (state) => state.design.urls[input.product?.toLowerCase()] || [],
  // );

  const products = ["Shutter", "Gate", "Grill", "Ladder", "Window"];

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    const validationErrors = validate(input);
    setErr(validationErrors);
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!data.contact) {
      newErrors.contact = "Contact is required";
    } else if (!phoneRegex.test(data.contact)) {
      newErrors.contact = "Enter a valid phone number";
    }

    if (!data.product) {
      newErrors.product = "Please select a product";
    }

    const numRegex = /^\d+$/;
    if (!numRegex.test(data.quantity)) {
      newErrors.quantity = "Please enter valid quantity of product";
    } else if (data.quantity === "0") {
      newErrors.quantity = "Minimum quantity should be 1";
    } else if (!data.quantity) {
      newErrors.quantity = "Please enter quantity of product";
    }

    if (data.size.length < 5) {
      newErrors.size = "size must be at least 5 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedInput = {
      ...input,
      [name]: value,
    };

    setInput(updatedInput);

    const validationErrors = validate(updatedInput);

    // show validation only if field was touched
    if (touched[name]) {
      setErr(validationErrors);
    }
  };

  const handleSelect = (url) => {
    setInput({
      ...input,
      selectedImage: url,
    });

    setShowImages(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErr = validate(input);

    if (Object.keys(validationErr).length > 0) {
      setErr(validationErr);
      return;
    }

    dispatch(setOrders(input));

    setInput({
      id: nanoid(),
      name: "",
      contact: "",
      product: "",
      quantity: "",
      size: "",
      selectedImage: "",
      status: "pending",
    });

    setTouched({
      name: false,
      contact: false,
      product: false,
      quantity: false,
      size: false,
    });

    setErr({});

    await sweetAlert.fire({
      icon: "success",
      title: "Order Placed!!",
      text: "Your Order has been placed successfully.",
      showConfirmButton: false,
      timer: 1800,
    });

    navigate("/user-home");
  }; 

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden w-full max-w-6xl">
        <div className="lg:w-1/2 bg-gray-100 flex items-start justify-center p-8">
          {input.selectedImage ? (
            <div>
              <img
                src={input.selectedImage}
                alt="Selected Design"
                className="rounded-xl shadow-lg w-full max-h-[600px] object-cover"
              />
              <h2 className="text-2xl font-semibold">{input.product}</h2>
            </div>
          ) : (
            <p>No Design Selected</p>
          )}
        </div>

        <div className="lg:w-1/2 p-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-row justify-between">
              <h1 className="text-xl font-semibold mb-4">Order</h1>
              <div
                onClick={() => navigate("/user-home")}
                className="w-6 h-6 flex items-center justify-center cursor-pointer"
              >
                ❌
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Customer Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                value={input.name}
                type="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && err.name && (
                <p className="text-red-500 text-xs">{err.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Contact No.
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                name="contact"
                value={input.contact}
                type="contact"
                placeholder="Contact"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.contact && err.contact && (
                <p className="text-red-500 text-xs">{err.contact}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product"
              >
                Select Product
              </label>

              <select
                id="product"
                name="product"
                value={input.product}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <option value="">Choose Product</option>
                {products.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {touched.product && err.product && (
                <p className="text-red-500 text-xs mt-1">{err.product}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                name="quantity"
                value={input.quantity}
                type="quantity"
                placeholder="Ex. 1, 2,..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.quantity && err.quantity && (
                <p className="text-red-500 text-xs">{err.quantity}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="size"
              >
                Size
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="size"
                name="size"
                value={input.size}
                type="size"
                placeholder="Ex. 20x40 ft.."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.size && err.size && (
                <p className="text-red-500 text-xs">{err.size}</p>
              )}
            </div>

            {/* <div className="p-5 ">
              <button
                type="button"
                onClick={() => setShowImages(!showImages)}
                className="bg-blue-500 text-white px-4 py-2 ml-20 rounded"
              >
                Choose Design
              </button>

              {showImages && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="option"
                      onClick={() => handleSelect(url)}
                      className="w-32 h-32 object-cover cursor-pointer border-4 hover:border-blue-500"
                    />
                  ))}
                </div>
              )}

              {input.selectedImage && (
                <div className="mt-5 ml-18">
                  <h3 className="text-sm font-semibold mb-2">
                    Selected Image:
                  </h3>

                  <img
                    src={input.selectedImage}
                    alt="selected"
                    className="w-40 h-40 object-cover rounded-md"
                  />
                </div>
              )}
            </div> */}

            <div className="flex items-center justify-between ml-33">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderService;
