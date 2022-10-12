import React from "react";

import { Button } from "../../components/button";
import { useRedirectHandler } from "../../hooks/use-redirect";

export function Home() {
  return (
    <Button
      label="ir para tela de checkout"
      handleClick={useRedirectHandler("checkout")}
    />
  );
}
