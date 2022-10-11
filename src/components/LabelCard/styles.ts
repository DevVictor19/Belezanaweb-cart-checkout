import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: ${MAIN_THEME.colors.gray_dark};
  text-transform: uppercase;
  padding: 0 14px;
`;

export const Card = styled.div`
  margin-top: 5px;
  max-width: 360px;
  max-height: 325px;
  overflow-y: scroll;
  padding: 12px;
  width: 100%;
  border-radius: 3px;
  background-color: ${MAIN_THEME.colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;
