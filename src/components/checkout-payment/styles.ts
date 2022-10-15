import styled from "styled-components";
import { MAIN_THEME } from "../../themes/main";

export const TwoCollumn = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  & > div:first-child {
    min-width: 160px;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    color: ${MAIN_THEME.colors.gray_light};
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 5px;
  }

  p {
    margin-top: 3px;
    color: ${MAIN_THEME.inputs.error};
    font-size: 12px;
    line-height: 14px;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 3px;
    outline: none;
    background-color: ${MAIN_THEME.colors.white};
    border: 1px solid ${MAIN_THEME.inputs.normal};
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 14px 13px 12px;

    color: ${MAIN_THEME.text.heading};
    font-size: 16px;
    line-height: 19px;
    font-family: inherit;

    ::placeholder {
      color: ${MAIN_THEME.inputs.placeholder};
      font-size: 16px;
      line-height: 19px;
    }

    :focus {
      border-color: ${MAIN_THEME.inputs.focus};
    }

    &.invalid {
      border-color: ${MAIN_THEME.inputs.error};
    }
  }
`;
