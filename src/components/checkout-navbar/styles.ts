import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const StyledNav = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  background-color: ${MAIN_THEME.colors.white};
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  ul {
    list-style: none;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 38px;
    padding: 0 30px;

    a {
      text-decoration: none;
      font-size: 13px;
      line-height: 16px;
      font-weight: bold;
      color: ${MAIN_THEME.colors.gray_light};

      &.active {
        color: ${MAIN_THEME.colors.primary};
      }
    }
  }
`;
