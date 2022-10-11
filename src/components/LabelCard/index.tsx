import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

import * as S from "./styles";

export function LabelCard({ label, children }: Props) {
  return (
    <div>
      <S.Heading>{label}</S.Heading>
      <S.Card>{children}</S.Card>
    </div>
  );
}