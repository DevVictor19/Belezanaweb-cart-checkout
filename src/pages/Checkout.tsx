import React from "react";
import { Outlet } from "react-router-dom";

export function Checkout() {
  return (
    <section>
      <h1>Checkout</h1>
      <Outlet />
    </section>
  );
}
