import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { RootState } from "./store";

const useHasPayment = () => {
  const payment = useSelector((state: RootState) => state.cart.paymentInfo);

  return !!payment;
};

export function ProtectedRoutes() {
  const hasPayment = useHasPayment();
  return hasPayment ? <Outlet /> : <Navigate to="/checkout/payment" />;
}
