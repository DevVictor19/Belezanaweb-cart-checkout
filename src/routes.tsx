import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/Checkout/index";
import { Bag } from "./components/Bag/index";

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
