import React from "react";
import { useOutletContext } from "react-router-dom";
import { useRedirectHandler } from "../../hooks/use-redirect";

import { CheckoutContext } from "../../types/checkout-context";
import { Button } from "../button";
import { TotalDisplay } from "../total-display";

export function CheckoutPayment() {
  const checkoutCtx = useOutletContext<CheckoutContext>()[0]!.totalInfo;
  const redirectHandler = useRedirectHandler("/checkout/confirmation");

  return (
    <>
      <TotalDisplay
        subTotal={checkoutCtx.subTotal}
        shippingTotal={checkoutCtx.shippingTotal}
        discount={checkoutCtx.discount}
        total={checkoutCtx.total}
      />
      <Button label="finalizar pedido" handleClick={redirectHandler} />
    </>
  );
}
