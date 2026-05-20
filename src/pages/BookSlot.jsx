import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getBookSlot, setBookSlot } from "../features/bookSlotSlice";
import { getSlot } from "../features/slotTimingSlice";
import sweetAlert from "sweetalert2";

const BookSlot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const selectedImageFromProps = location.state?.selectedImage || "";
  const productFromProps = location.state?.product || "";
  const descriptionFromProps = location.state?.description || "";

  const [input, setInput] = useState({
    id: nanoid(),
    name: "",
    contact: "",
    service: productFromProps,
    date: new Date().toISOString().split("T")[0],
    time: "",
    selectedImage: selectedImageFromProps,
    status: "pending",
  });

  const [touched, setTouched] = useState({
    name: false,
    contact: false,
    service: false,
    date: false,
    time: false,
  });

  const [err, setErr] = useState({});

  const products = [
    "ArcWelding",
    "MIGWelding",
    "TIGWelding",
    "GasWelding",
    "ResistanceSpotWelding",
    "LaserWelding",
    "Drilling",
    "TableFrame",
    "ShedFabrication",
    "SteelAlmirah",
    "MetalCutting",
    "GrindingPolishing",
    "PipeBending",
  ];

  useEffect(() => {
    dispatch(getSlot());
  }, []);

  const slotTimes = useSelector((state) => state.slot.slotVal);

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

    if (!data.service) {
      newErrors.service = "Please select a service";
    }

    if (data.time.length < 5) {
      newErrors.time = "Enter valid time";
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
      setTouched({
        name: true,
        contact: true,
        service: true,
        date: true,
        time: true,
      });
      
      await sweetAlert.fire({
        icon: "error",
        title: "Fill all required fields!",
        text: "Please fill all required fields correctly.",
        showConfirmButton: false,
        timer: 1800,
      });
      return;
    }

    dispatch(setBookSlot(input));

    setInput({
      id: nanoid(),
      name: "",
      contact: "",
      service: "",
      date: "",
      time: "",
      selectedImage: "",
      status: "pending",
    });

    setTouched({
      name: false,
      contact: false,
      service: false,
      date: false,
      time: false,
    });

    setErr({});

    await sweetAlert.fire({
      icon: "success",
      title: "Order Placed!",
      text: "Your order placed successfully.",
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
              <h2 className="text-2xl font-semibold mt-4">
                {productFromProps}
              </h2>
              <p>{descriptionFromProps}</p>
            </div>
          ) : (
            <p>No Design Selected</p>
          )}
        </div>

        <div className="lg:w-1/2 p-6">
          <div className="bg-gray-300 p-5 rounded-md">
            {slotTimes.length > 0 ? (
              <p>
                Slot timing between{" "}
                <span className="font-semibold">{slotTimes[0]?.from}</span> to{" "}
                <span className="font-semibold">{slotTimes[0]?.to}</span>
              </p>
            ) : (
              <p>No slots available, Please try later.</p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-row justify-between">
              <h1 className="text-xl font-semibold mb-4">Book Slot</h1>
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
                htmlFor="service"
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                value={input.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <option value="">Choose Service</option>
                {products.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {touched.service && err.service && (
                <p className="text-red-500 text-xs mt-1">{err.service}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>

              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none"
                id="date"
                name="date"
                type="date"
                value={input.date}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                name="time"
                value={input.time}
                type="time"
                placeholder="Ex. 04:32 PM"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.time && err.time && (
                <p className="text-red-500 text-xs">{err.time}</p>
              )}
            </div>

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

export default BookSlot;
