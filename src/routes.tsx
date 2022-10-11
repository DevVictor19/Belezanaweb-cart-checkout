import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/checkout";
import { CartResume } from "./components/cart-resume";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="checkout" element={<Checkout />}>
          <Route index element={<CartResume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
