import React from "react";
import { useNavigate } from "react-router-dom";

export function useRedirectHandler(
  path: string
): (e: React.MouseEvent) => void {
  const navigate = useNavigate();

  return (_) => {
    navigate(path);
  };
}
