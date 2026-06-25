import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../features/profileSlice";
import logo from "../assets/IronCraftLogo.webp";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../features/profileSlice";

const UserHeader = () => {
  // const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserProfile());
  // }, []);

  const user = useSelector((state) => state.profile.user);
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "";

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-35 h-16 cursor-pointer"
            onClick={() => navigate("/user-home")}
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800"></h1>

            <p className="text-sm text-gray-500"></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleLogout}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Logout
          </button>
          <div className="relative group">
            <div className="bg-blue-300 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
              {firstLetter}
            </div>

            <div className="absolute right-0 top-12 w-auto bg-gray-200 shadow-lg rounded-lg p-4 border hidden group-hover:block">
              <h2 className="font-semibold text-lg">Welcome {user?.name}</h2>
              <p className="text-gray-600 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(UserHeader);
