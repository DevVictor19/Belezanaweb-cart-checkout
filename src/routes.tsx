import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { CheckoutResume } from "./components/checkout-resume";
import { CheckoutPayment } from "./components/checkout-payment";
import { CheckoutConfirmation } from "./components/checkout-confirmation";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />}>
          <Route index element={<CheckoutResume />} />
          <Route path="payment" element={<CheckoutPayment />} />
          <Route path="confirmation" element={<CheckoutConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
