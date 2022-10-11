import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

import * as S from "./styles";

export function LabelCard({ label, children }: Props) {
  return (
    <S.Container>
      <S.Heading>{label}</S.Heading>
      <S.Card>{children}</S.Card>
    </S.Container>
  );
}
