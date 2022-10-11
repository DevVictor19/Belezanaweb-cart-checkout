import React from "react";

import { ICartTotal } from "../../types/cart-total";
import { ParseMoneyFormat } from "../../utils/parse-money-format";
import * as S from "./styles";

export function TotalDisplay(props: ICartTotal) {
  return (
    <S.Container>
      <ul>
        <S.Item>
          <p>PRODUTOS</p>
          <p>R$ {ParseMoneyFormat(props.subTotal)}</p>
        </S.Item>
        <S.Item>
          <p>FRETE</p>
          <p>R$ {ParseMoneyFormat(props.shippingTotal)}</p>
        </S.Item>
        <S.Item className="discount">
          <p>DESCONTO</p>
          <p>- R$ {ParseMoneyFormat(props.discount)}</p>
        </S.Item>
        <S.Item className="total">
          <p>TOTAL</p>
          <p>R$ {ParseMoneyFormat(props.total)}</p>
        </S.Item>
      </ul>
    </S.Container>
  );
}
