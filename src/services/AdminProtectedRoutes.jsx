import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const isAdminLoggedIn = JSON.parse(localStorage.getItem("adminLoggedIn"));

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin-login" />;
  }
  return <Outlet />;
};

export default AdminProtectedRoutes;
