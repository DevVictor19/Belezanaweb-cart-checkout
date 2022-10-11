import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";
import { CheckoutNavbar } from "../../components/checkoutNavbar";

export function Checkout() {
  return (
    <Container>
      <CheckoutNavbar />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
}
