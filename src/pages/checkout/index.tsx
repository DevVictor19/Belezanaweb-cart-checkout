import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";
import { CheckoutNavbar } from "../../components/checkout-navbar";
import { ICheckoutResume } from "../../types/CheckoutResume";

export function Checkout() {
  const [checkoutCtx, setCheckoutCtx] = React.useState<ICheckoutResume | null>(
    null
  );

  return (
    <S.Container>
      <CheckoutNavbar />
      <S.Content>
        <Outlet context={[checkoutCtx, setCheckoutCtx]} />
      </S.Content>
    </S.Container>
  );
}
