import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

interface Props {
  label: string;
  path: string;
}

export function RedirectButton(props: Props) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(props.path);
  };

  return <S.Button onClick={handleClick}>{props.label}</S.Button>;
}
