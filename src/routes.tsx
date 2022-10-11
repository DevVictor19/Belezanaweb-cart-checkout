import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/checkout";
import { Products } from "./components/products";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="checkout" element={<Checkout />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
