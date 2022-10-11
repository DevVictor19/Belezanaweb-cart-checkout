import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";
import { CheckoutNavbar } from "../../components/CheckoutNavbar";
import { ICheckoutContext } from "../../interfaces/CheckOutContext";

export function Checkout() {
  const [checkoutCtx, setCheckoutCtx] = React.useState<ICheckoutContext | null>(
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
