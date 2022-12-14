import styled from "styled-components";

import { MAIN_THEME } from "../../themes/main";

export const Container = styled.div`
  width: 100%;
  background-color: ${MAIN_THEME.colors.gray_very_light};
`;

export const Content = styled.section`
  width: 100%;
  padding: 0 10px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
