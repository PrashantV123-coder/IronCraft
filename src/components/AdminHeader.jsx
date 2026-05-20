import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProfile } from "../features/profileSlice";
import logo from "../assets/IronCraftLogo.webp";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

  const admin = useSelector((state) => state.profile.admin);
  const firstLetter = admin?.name?.charAt(0)?.toUpperCase() || "";

  const handleLogout = () => {
    localStorage.setItem("adminLoggedIn", false);
    navigate("/admin-login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-32 sm:w-40 h-auto cursor-pointer"
          />

          {/* Text */}
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build-Deliver-Grow
            </h1>

            <p className="text-xs sm:text-sm text-gray-500">
              Customise products and services...
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer text-sm sm:text-base"
          >
            Logout
          </button>

          {/* Profile */}
          <div className="relative group">
            <div className="bg-blue-300 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer font-semibold">
              {firstLetter}
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 top-12 min-w-[220px] bg-gray-200 shadow-lg rounded-lg p-4 border hidden group-hover:block">
              <h2 className="font-semibold text-base sm:text-lg">
                Welcome {admin?.name}
              </h2>

              <p className="text-gray-600 text-sm break-all">
                {admin?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;