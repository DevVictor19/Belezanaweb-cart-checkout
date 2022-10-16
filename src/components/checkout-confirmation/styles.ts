import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const ConfirmationBox = styled.div`
  margin-top: 12px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${MAIN_THEME.colors.primary};
  }

  p {
    color: ${MAIN_THEME.colors.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
  }
`;

export const PaymentInfoUl = styled.ul`
  list-style: none;

  li p {
    font-size: 14px;
    line-height: 17px;
    color: ${MAIN_THEME.colors.black};
  }
`;
