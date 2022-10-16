import React from "react";
import { useSelector } from "react-redux";

import * as S from "./styles";
import { RootState } from "../../store";
import { CartProduct } from "../cart-product";
import { LabelCard } from "../label-card";
import { TotalDisplay } from "../total-display";
import shape from "../../assets/shape.png";

export function CheckoutConfirmation() {
  const { cardNumber, ownerName, validityDate } = useSelector(
    (state: RootState) => state.cart.paymentInfo
  )!;

  const products = useSelector((state: RootState) => state.cart.products);
  const totalInfo = useSelector((state: RootState) => state.cart.totalInfo)!;

  return (
    <>
      <S.ConfirmationBox>
        <div>
          <img src={shape} alt="ícone de correto" />
        </div>
        <p>COMPRA EFETUADA COM SUCESSO</p>
      </S.ConfirmationBox>
      <LabelCard label="pagamento">
        <S.PaymentInfoUl>
          <li>
            <p>****.****.****.{cardNumber.substring(cardNumber.length - 4)}</p>
          </li>
          <li>
            <p>{ownerName}</p>
          </li>
          <li>
            <p>{validityDate}</p>
          </li>
        </S.PaymentInfoUl>
      </LabelCard>
      <LabelCard label="produtos">
        {products.map((product) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              description={product.description.split("-")[0]}
              img={product.img}
              price={product.price}
            />
          );
        })}
      </LabelCard>
      <TotalDisplay
        discount={totalInfo.discount}
        total={totalInfo.total}
        subTotal={totalInfo.subTotal}
        shippingTotal={totalInfo.shippingTotal}
      />
    </>
  );
}
