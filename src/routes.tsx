import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/checkout";
import { Bag } from "./components/bag";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="checkout" element={<Checkout />}>
          <Route index element={<Bag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
