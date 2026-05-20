import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserProtectedRoutes = () => {
    const auth = JSON.parse(localStorage.getItem("userLoggedIn"));

    if (!auth) {
        return <Navigate to="/user-login" />;
    }
  return (
    <Outlet />
  )
}

export default UserProtectedRoutes;