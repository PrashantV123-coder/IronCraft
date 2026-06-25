import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  // const userToken = localStorage.getItem("token");
  // const adminToken = localStorage.getItem("tokenA");

  // if(adminToken) {
  //   return <Navigate to="/admin-home" replace />;
  // }

  // if(userToken) {
  //   return <Navigate to="/user-home" replace />;
  // }

  return <Outlet />;
};

export default PublicRoutes;