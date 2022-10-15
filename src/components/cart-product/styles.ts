import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const Container = styled.article`
  display: flex;
  background-color: ${MAIN_THEME.colors.white};
  border-radius: 3px;
  border: 1px solid ${MAIN_THEME.colors.gray_very_light};
  margin-bottom: 15px;
  padding: 11px 10px;
`;

export const Info = styled.div`
  margin-left: 11px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: ${MAIN_THEME.text.heading};
    font-size: 13px;
    line-height: 16px;
    font-weight: normal;
  }

  p {
    color: ${MAIN_THEME.text.heading};
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
  }
`;
