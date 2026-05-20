import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link, useNavigate } from "react-router-dom";
import { addProducts } from "../features/designSlice";
import sweetAlert from "sweetalert2";

const ListServices = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: nanoid(),
    productname: "",
    url: "",
    category: "",
    description: "",
    uses: "",
  });

  const [touched, setTouched] = useState({
    productname: false,
    url: false,
    category: false,
    description: false,
    uses: false,
  });

  const [err, setErr] = useState({});

  const products = ["Welding", "OtherServices"];

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
      title: "service listed",
      text: "Your service listed successfully.",
      showConfirmButton: false,
      timer: 1800,
    });

    navigate("/admin-home");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden w-1/2 max-w-6xl">
        <div className="lg:w-full p-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-row justify-between">
              <h1 className="text-xl font-semibold mb-4">List Product</h1>
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
                htmlFor="productname"
              >
                Service Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productname"
                name="productname"
                value={input.productname}
                type="productname"
                placeholder="Service Name"
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
                Service Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={input.description}
                type="description"
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
                Service Uses
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="uses"
                name="uses"
                value={input.uses}
                type="uses"
                placeholder="Service uses"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.uses && err.uses && (
                <p className="text-red-500 text-xs">{err.uses}</p>
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

            <div className="flex items-center justify-center mt-10">
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

export default ListServices;
