import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          
          <Route path="profile"element={<ProtectedRoute><Profile /></ProtectedRoute>}/>

        </Route>
        
        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;