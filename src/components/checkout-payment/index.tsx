import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { ICartTotalInfo } from "../../types/cart-total-info";

import * as S from "./styles";
import { Button } from "../button";
import { LabelCard } from "../label-card";
import { TotalDisplay } from "../total-display";
import { ControledInput } from "../controled-input";

const validation = (value: string) => value.length > 5;

export function CheckoutPayment() {
  const navigate = useNavigate();

  const totalInfo: ICartTotalInfo = useSelector(
    (state: RootState) => state.cart.totalInfo!
  );

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
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="card-owner">Nome do Titular:</label>
            <ControledInput
              id="card-owner"
              type="text"
              placeholder="Como no cartão"
              validationFn={validation}
              errorClass={"invalid"}
            />
          </S.InputDiv>
          <S.TwoCollumn>
            <S.InputDiv>
              <label htmlFor="validity">Validade (mês/ano):</label>
              <input id="validity" type="text" placeholder="__/____" />
            </S.InputDiv>
            <S.InputDiv>
              <label htmlFor="cvv">CVV:</label>
              <input id="cvv" type="text" placeholder="___" />
            </S.InputDiv>
          </S.TwoCollumn>
        </form>
      </LabelCard>
      <TotalDisplay
        total={totalInfo.total}
        subTotal={totalInfo.subTotal}
        discount={totalInfo.discount}
        shippingTotal={totalInfo.shippingTotal}
      />
      <Button
        label="finalizar pedido"
        handleClick={(_) => navigate("/checkout/confirmation")}
      />
    </>
  );
}
