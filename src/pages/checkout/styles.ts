import styled from "styled-components";

import { MAIN_THEME } from "../../themes/main";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  .content-wrapper {
    background-color: ${MAIN_THEME.colors.gray_very_light};
    height: 100%;
    padding: 10px;
  }
`;
