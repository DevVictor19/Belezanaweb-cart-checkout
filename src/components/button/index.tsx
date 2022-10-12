import React from "react";

import * as S from "./styles";

interface Props {
  label: string;
  handleClick?: (e: React.MouseEvent) => void;
}

export function Button(props: Props) {
  return <S.Button onClick={props.handleClick}>{props.label}</S.Button>;
}
