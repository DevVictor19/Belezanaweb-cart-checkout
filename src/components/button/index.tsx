import React from "react";

import * as S from "./styles";

interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: Props) {
  return (
    <S.Button type={props.type} onClick={props.handleClick}>
      {props.label}
    </S.Button>
  );
}
