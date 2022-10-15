import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RootState } from "../../store";
import { ICartTotalInfo } from "../../types/cart-total-info";

import * as S from "./styles";
import { Button } from "../button";
import { LabelCard } from "../label-card";
import { TotalDisplay } from "../total-display";
import { paymentSchema } from "../../validation/payment-form-validation";
import { ICartPaymentInfo } from "../../types/cart-payment-info";

export function CheckoutPayment() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICartPaymentInfo>({
    resolver: yupResolver(paymentSchema),
  });

  const totalInfo: ICartTotalInfo = useSelector(
    (state: RootState) => state.cart.totalInfo!
  );

  const onSubmitForm = (data: ICartPaymentInfo) => {
    console.log(data);
  };

  return (
    <>
      <LabelCard label="cartão de credito">
        <form onSubmit={handleSubmit(onSubmitForm)} id="payment-form">
          <S.InputDiv>
            <label htmlFor="card-number">Número do cartão:</label>
            <input
              className={errors.cardNumber ? "invalid" : ""}
              id="card-number"
              type="text"
              placeholder="____.____.____.____"
              {...register("cardNumber")}
            />
            <p>{errors.cardNumber?.message}</p>
          </S.InputDiv>
          <S.InputDiv>
            <label htmlFor="owner-name">Nome do Titular:</label>
            <input
              className={errors.ownerName ? "invalid" : ""}
              id="owner-name"
              type="text"
              placeholder="Como no cartão"
              {...register("ownerName")}
            />
            <p>{errors.ownerName?.message}</p>
          </S.InputDiv>
          <S.TwoCollumn>
            <S.InputDiv>
              <label htmlFor="validity">Validade (mês/ano):</label>
              <input
                className={errors.validityDate ? "invalid" : ""}
                id="validity"
                type="text"
                placeholder="__/____"
                {...register("validityDate")}
              />
              <p>{errors.validityDate?.message}</p>
            </S.InputDiv>
            <S.InputDiv>
              <label htmlFor="cvv">CVV:</label>
              <input
                className={errors.cvv ? "invalid" : ""}
                id="cvv"
                type="text"
                placeholder="___"
                {...register("cvv")}
              />
              <p>{errors.cvv?.message}</p>
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
      <Button label="finalizar pedido" form="payment-form" type="submit" />
    </>
  );
}
