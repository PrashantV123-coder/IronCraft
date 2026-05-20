import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const adminLoggedIn = localStorage.getItem("adminLoggedIn");

  if (userLoggedIn === "true") {
    return <Navigate to="/user-home" />;
  }

  if (adminLoggedIn === "true") {
    return <Navigate to="/admin-home" />;
  }

  return <Outlet />;
};

export default PublicRoutes;