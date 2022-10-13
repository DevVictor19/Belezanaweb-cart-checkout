import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";
import { CheckoutNavbar } from "../../components/checkout-navbar";

export function Checkout() {
  return (
    <S.Container>
      <CheckoutNavbar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}
