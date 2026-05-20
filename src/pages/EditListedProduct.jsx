import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addProducts } from "../features/designSlice";
import sweetAlert from "sweetalert2";

const EditListedProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { category, productName, productData } = location.state || {};
  console.log(category);

  const [input, setInput] = useState({
    id: nanoid(),
    productname: productName || "",
    url: productData?.url || "",
    category: category || "",
    description: productData?.description || "",
    uses: productData?.uses || "",
  });

  const [touched, setTouched] = useState({
    productname: false,
    url: false,
    category: false,
    description: false,
    uses: false,
  });

  const [err, setErr] = useState({});

  // const imageUrls = useSelector(
  //   (state) => state.design.urls[input.product?.toLowerCase()] || [],
  // );

  const products = [
    "shutter",
    "gate",
    "grill",
    "ladder",
    "window",
    "welding",
    "otherservices",
  ];

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

    if (!data.productname.trim()) {
      newErrors.productname = "productName is required";
    } else if (data.productname.length < 3) {
      newErrors.productname = "productName must be at least 3 characters";
    }

    if (!data.url) {
      newErrors.url = "Please enter a Img url";
    }

    if (!data.category) {
      newErrors.category = "Please select a category";
    }

    if (!data.description.trim()) {
      newErrors.description = "description is required";
    } else if (data.description.length < 10) {
      newErrors.description = "description must be at least 10 characters";
    }

    if (data.uses.length < 5) {
      newErrors.uses = "Product uses must be at least 5 characters";
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

    dispatch(
      addProducts({
        category: input.category.toLowerCase(),

        productName: input.productname,

        productData: {
          url: input.url,
          description: input.description,
          uses: input.uses,
        },
      }),
    );

    setInput({
      id: nanoid(),
      productname: "",
      url: "",
      category: "",
      description: "",
      uses: "",
    });

    setTouched({
      productname: false,
      url: false,
      category: false,
      description: false,
      uses: false,
    });

    setErr({});

    await sweetAlert.fire({
      icon: "success",
      title: "Product Edited!",
      text: "Your product was updated successfully.",
      showConfirmButton: false,
      timer: 1800,
    });

    navigate("/admin-home");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden w-full max-w-4xl">
        <div className="w-full p-4 sm:p-6">
          <form
            onSubmit={handleSubmit}
            className="w-full mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h1 className="text-lg sm:text-xl font-semibold">Edit-Listed Product</h1>

              <div
                onClick={() => navigate("/admin-home")}
                className="w-6 h-6 flex items-center justify-center cursor-pointer text-sm sm:text-base"
              >
                ❌
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="productname"
              >
                Product Name/Design
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productname"
                name="productname"
                value={input.productname}
                type="text"
                placeholder="Product Name/Design"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.productname && err.productname && (
                <p className="text-red-500 text-xs">{err.productname}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="url"
              >
                Image URL
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                name="url"
                value={input.url}
                type="url"
                placeholder="Image url"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.url && err.url && (
                <p className="text-red-500 text-xs">{err.url}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Select Category
              </label>

              <select
                id="category"
                name="category"
                value={input.category}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <option value="">Choose Category</option>

                {products.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {touched.category && err.category && (
                <p className="text-red-500 text-xs mt-1">{err.category}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Product Description
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={input.description}
                type="text"
                placeholder="description"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.description && err.description && (
                <p className="text-red-500 text-xs">{err.description}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="uses"
              >
                Uses
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="uses"
                name="uses"
                value={input.uses}
                type="text"
                placeholder="Product uses"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.uses && err.uses && (
                <p className="text-red-500 text-xs">{err.uses}</p>
              )}
            </div>

            <div className="flex items-center justify-center mt-8 sm:mt-10">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline text-sm sm:text-base"
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

export default EditListedProduct;
