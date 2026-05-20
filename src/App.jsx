import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import UserHome from "./pages/UserHome";
import AdminPanel from "./pages/AdminPanel";
import UserProtectedRoutes from "./services/UserProtectedRoutes";
import AdminProtectedRoutes from "./services/AdminProtectedRoutes";
import PublicRoutes from "./services/PublicRoutes";
import OrderService from "./pages/OrderService";
import BookSlot from "./pages/BookSlot";
import MyOrders from "./pages/MyOrders";
import BookedSlots from "./pages/BookedSlots";
import ShutterProducts from "./pages/ShutterProducts";
import GateProducts from "./pages/GateProducts";
import GrillProducts from "./pages/GrillProducts";
import LadderProducts from "./pages/LadderProduct";
import WindowProducts from "./pages/WindowProduct";
import WeldingTypes from "./pages/WeldingTypes";
import OtherServices from "./pages/OtherServices"
import AdminOrders from "./pages/AdminOrders";
import AdminBookSlots from "./pages/AdminBookSlots";
import AdminStart from "./pages/AdminStart";
import ListProducts from "./pages/ListProducts";
import ListServices from "./pages/ListServices";
import YourProducts from "./pages/YourProducts";
import YourServices from "./pages/YourServices";
import EditListedProduct from "./pages/EditListedProduct";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Start />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/admin-start" element={<AdminStart />} />
        </Route>

        {/* User Protected Routes  */}
        <Route element={<UserProtectedRoutes />}>
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/book-slot" element={<BookSlot />} />
          <Route path="/order-service" element={<OrderService />} />
          <Route path="/shutter-products" element={<ShutterProducts />} />
          <Route path="/gate-products" element={<GateProducts />} />
          <Route path="/grill-products" element={<GrillProducts />} />
          <Route path="/ladder-products" element={<LadderProducts />} />
          <Route path="/window-products" element={<WindowProducts />} />
          <Route path="/welding-types" element={<WeldingTypes />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/booked-slots" element={<BookedSlots />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/admin-home" element={<AdminPanel />} />
          <Route path="/admin-orders" element={<AdminOrders />} />
          <Route path="/admin-book-slots" element={<AdminBookSlots />} />
          <Route path="/list-products" element={<ListProducts />} />
          <Route path="/list-services" element={<ListServices />} />
          <Route path="/your-products" element={<YourProducts />} />
          <Route path="/your-services" element={<YourServices />} />
          <Route path="/edit-listed-product" element={<EditListedProduct />} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;