import styled from "styled-components";

import { MAIN_THEME } from "../../themes/main";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${MAIN_THEME.colors.gray_very_light};
`;

export const Content = styled.section`
  margin-top: 40px;
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
