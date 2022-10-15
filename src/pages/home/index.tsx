import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/button";

export function Home() {
  const navigate = useNavigate();

  return (
    <Button
      label="ir para tela de checkout"
      onClick={(_) => navigate("checkout")}
    />
  );
}
