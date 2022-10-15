import React from "react";

import * as S from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button(props: Props) {
  return <S.Button {...props}>{props.label}</S.Button>;
}
