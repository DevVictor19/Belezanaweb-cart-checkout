import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const Container = styled.article`
  margin-top: 20px;
  padding: 15px 14px;
  max-width: 360px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${MAIN_THEME.colors.gray_light};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  color: ${MAIN_THEME.text.heading};
  font-size: 14px;
  line-height: 17px;

  &.discount {
    color: ${MAIN_THEME.colors.orange};
  }

  &.total {
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 0;
  }
`;
