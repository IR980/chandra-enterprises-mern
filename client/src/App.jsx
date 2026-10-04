import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
// admin
import AdminLayout from "./layouts/AdminLayout";

// main website
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Inquiry from "./pages/inquiry/Inquiry";
import Profile from "./pages/profile/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Payment from "./pages/payment/Payment";
import ProtectedRoute from "./routes/ProtectedRoute";

import NotFound from "./pages/notfound/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// vehicle tracking
import TrackVehicles from "./pages/TrackVehicles";
/* ===========================
   ADMIN PAGES
=========================== */
import AdminLogin from "./pages/auth/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminGallery from "./pages/admin/Gallery";
import Inquiries from "./pages/admin/Inquiries";
import Subscribers from "./pages/admin/Subscribers";
// import Catalogue from "./pages/admin/Catalogue";
// import Settings from "./pages/admin/Settings";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* MAIN WEBSITE */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />

          <Route path="services" element={<Services />} />

          <Route path="gallery" element={<Gallery />} />

          <Route path="contact" element={<Contact />} />

          <Route path="inquiry" element={<Inquiry />} />

          <Route path="/payment" element={<Payment />} />

          
          <Route path="/track-vehicles" element={<TrackVehicles />} />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        /* =========================== ADMIN DASHBOARD
        =========================== */
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* Redirect /admin -> /admin/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products" element={<AdminProducts />} />

          <Route path="gallery" element={<AdminGallery />} />

          <Route path="inquiries" element={<Inquiries />} />

          <Route path="subscribers" element={<Subscribers />} />

          {/* Future Modules */}

          {/* <Route path="catalogue" element={<Catalogue />} /> */}

          {/* <Route path="payment" element={<AdminPayment />} /> */}

          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
