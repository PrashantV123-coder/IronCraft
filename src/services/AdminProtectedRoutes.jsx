import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const token = localStorage.getItem("tokenA");

  return token ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default AdminProtectedRoutes;