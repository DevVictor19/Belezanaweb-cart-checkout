import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/Checkout";
import { Products } from "./components/Products";

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
