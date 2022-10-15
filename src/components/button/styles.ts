import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const Button = styled.button`
  height: 60px;
  max-width: 360px;
  margin-top: 20px;
  width: 100%;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: ${MAIN_THEME.button.normal};
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  color: ${MAIN_THEME.colors.white};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: ${MAIN_THEME.button.hover};
  }
`;
