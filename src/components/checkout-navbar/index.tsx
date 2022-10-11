import React from "react";
import { NavLink } from "react-router-dom";

import { StyledNav } from "./styles";

export function CheckoutNavbar() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/checkout"
          >
            SACOLA
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="payment"
          >
            PAGAMENTO
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="confirmation"
          >
            CONFIRMAÇÃO
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
