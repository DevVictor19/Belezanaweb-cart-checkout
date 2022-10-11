import styled from "styled-components";

import { MAIN_THEME } from "../../themes/main";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${MAIN_THEME.colors.gray_very_light};
  padding: 10px;

  .content {
    margin-top: 40px;
  }
`;
