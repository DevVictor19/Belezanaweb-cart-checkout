import React from "react";
import { useOutletContext } from "react-router-dom";
import { useRedirectHandler } from "../../hooks/use-redirect";

import * as S from "./styles";
import { CheckoutContext } from "../../types/checkout-context";
import { Button } from "../button";
import { LabelCard } from "../label-card";
import { TotalDisplay } from "../total-display";

export function CheckoutPayment() {
  const checkoutCtx = useOutletContext<CheckoutContext>()[0]!.totalInfo;
  const redirectHandler = useRedirectHandler("/checkout/confirmation");

  return (
    <>
      <LabelCard label="cartão de credito">
        <form>
          <S.InputDiv>
            <label htmlFor="card-number">Número do cartão:</label>
            <input
              id="card-number"
              type="text"
              placeholder="____.____.____.____"
            />
            <p>Campo Inválido</p>
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="card-owner">Nome do Titular:</label>
            <input id="card-owner" type="text" placeholder="Como no cartão" />
            <p>Campo Inválido</p>
          </S.InputDiv>
          <S.TwoCollumn>
            <S.InputDiv>
              <label htmlFor="validity">Validade (mês/ano):</label>
              <input id="validity" type="text" placeholder="__/____" />
              <p>Campo Inválido</p>
            </S.InputDiv>
            <S.InputDiv>
              <label htmlFor="cvv">CVV:</label>
              <input id="cvv" type="text" placeholder="___" />
              <p>Campo Inválido</p>
            </S.InputDiv>
          </S.TwoCollumn>
        </form>
      </LabelCard>
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
