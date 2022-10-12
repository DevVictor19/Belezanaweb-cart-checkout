import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { CheckoutResume } from "./components/checkout-resume";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />}>
          <Route index element={<CheckoutResume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
