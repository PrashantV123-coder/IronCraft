import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Start = lazy(() => import("./pages/Start"));
const UserLogin = lazy(() => import("./pages/UserLogin"));
const UserRegister = lazy(() => import("./pages/UserRegister"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const EditListedProduct = lazy(() => import("./pages/EditListedProduct"));
const YourServices = lazy(() => import("./pages/YourServices"));
const YourProducts = lazy(() => import("./pages/YourProducts"));
const ListServices = lazy(() => import("./pages/ListServices"));
const ListProducts = lazy(() => import("./pages/ListProducts"));
const AdminStart = lazy(() => import("./pages/AdminStart"));
const AdminBookSlots = lazy(() => import("./pages/AdminBookSlots"));
const AdminOrders = lazy(() => import("./pages/AdminOrders"));
const OtherServices = lazy(() => import("./pages/OtherServices"));
const WeldingTypes = lazy(() => import("./pages/WeldingTypes"));
const WindowProducts = lazy(() => import("./pages/WindowProduct"));
const LadderProducts = lazy(() => import("./pages/LadderProduct"));
const GrillProducts = lazy(() => import("./pages/GrillProducts"));
const GateProducts = lazy(() => import("./pages/GateProducts"));
const ShutterProducts = lazy(() => import("./pages/ShutterProducts"));
const BookedSlots = lazy(() => import("./pages/BookedSlots"));
const MyOrders = lazy(() => import("./pages/MyOrders"));
const BookSlot = lazy(() => import("./pages/BookSlot"));
const OrderService = lazy(() => import("./pages/OrderService"));
const PublicRoutes = lazy(() => import("./services/PublicRoutes"));
const AdminProtectedRoutes = lazy(
  () => import("./services/AdminProtectedRoutes"),
);
const UserProtectedRoutes = lazy(
  () => import("./services/UserProtectedRoutes"),
);
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const UserHome = lazy(() => import("./pages/UserHome"));
const AdminRegister = lazy(() => import("./pages/AdminRegister"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {/* <Route element={<PublicRoutes />}> */}
            <Route path="/" element={<Start />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/user-register" element={<UserRegister />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/admin-start" element={<AdminStart />} />
          {/* </Route> */}

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
            <Route
              path="/edit-listed-product"
              element={<EditListedProduct />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
