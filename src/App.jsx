import React from "react";
import LandingPage from "./suby/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./suby/components/CartPage";
import AboutPage from "./suby/components/About";
import ContactPage from "./suby/components/ContactUs";

import "./App.css";
import ProductMenu from "./suby/components/ProductMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
