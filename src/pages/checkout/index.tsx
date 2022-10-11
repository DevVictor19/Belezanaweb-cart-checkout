import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./styles";

export function Checkout() {
  return (
    <Container>
      <h1>Checkout</h1>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </Container>
  );
}
