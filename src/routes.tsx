import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/Checkout/";
import { Bag } from "./components/Bag/";

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
