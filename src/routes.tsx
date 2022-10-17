import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedRoutes } from "./protected.routes";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { Spinner } from "./components/spinner";

const CheckoutResume = React.lazy(() =>
  import("./components/checkout-resume").then((module) => ({
    default: module.CheckoutResume,
  }))
);

const CheckoutPayment = React.lazy(() =>
  import("./components/checkout-payment").then((module) => ({
    default: module.CheckoutPayment,
  }))
);

const CheckoutConfirmation = React.lazy(() =>
  import("./components/checkout-confirmation").then((module) => ({
    default: module.CheckoutConfirmation,
  }))
);

function LazyLoad({ children }: { children: React.ReactNode }) {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route
            index
            element={
              <LazyLoad>
                <CheckoutResume />
              </LazyLoad>
            }
          />
          <Route
            path="payment"
            element={
              <LazyLoad>
                <CheckoutPayment />
              </LazyLoad>
            }
          />
          <Route element={<ProtectedRoutes />}>
            <Route
              path="confirmation"
              element={
                <LazyLoad>
                  <CheckoutConfirmation />
                </LazyLoad>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
