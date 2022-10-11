import React from "react";

import { IProduct } from "../../types/Product";
import { ParseMoneyFormat } from "../../utils/ParseMoneyFormat";
import * as S from "./styles";

export function Product(props: IProduct) {
  return (
    <S.Container>
      <img height={65} width={65} src={props.img} alt={props.description} />
      <S.Info>
        <h1>{props.description}</h1>
        <p>R$ {ParseMoneyFormat(props.price)}</p>
      </S.Info>
    </S.Container>
  );
}
