import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sweetAlert from "sweetalert2";

const UserLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [err, setErr] = useState({});

  const navigate = useNavigate();

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters";
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length > 0) {
      setErr(validationErrors);
      return;
    }

    const User = JSON.parse(localStorage.getItem("user"));

    if (
      User &&
      User.email === input.email &&
      User.password === input.password
    ) {
      localStorage.setItem("userLoggedIn", "true");

      await sweetAlert.fire({
        icon: "success",
        title: "Logged in!!",
        text: "user logged in successfully.",
        showConfirmButton: false,
        timer: 1800,
      });
      navigate("/user-home");
    } else {
      await sweetAlert.fire({
        icon: "error",
        title: "Invalid email or password!!",
        text: "Please try again.",
        showConfirmButton: false,
        timer: 1800,
      });
    }
  };
  
  return (
    <div className="bg-gray-300 w-full h-screen flex items-center justify-center">
      <div className="p-6 bg-gray-300 w-full h-110 max-w-md mt-10">
        <form
          onSubmit={handleLogin}
          className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold mb-4">User Login</h1>
            <div
              onClick={() => navigate("/")}
              className="w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              ❌
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              value={input.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && err.email && <p className="text-red-500 text-xs">{err.email}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              value={input.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && err.password && <p className="text-red-500 text-xs">{err.password}</p>}
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Don't have an account?{" "}
            <Link to="/user-register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default UserLogin;
