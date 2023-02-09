import styled from "styled-components";
import { colors } from "./Theme";

// Search form
const StyledForm = styled.form`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3em;
  padding: 14px 20px;
  margin: 23px 0;
  border: none;
  border-radius: 1rem;
  background: ${({ theme }) => theme.inputBg};
  :focus-within {
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
  }
  &.error {
    :focus-within {
      box-shadow: 0px 0px 0px 1px ${colors.accent} inset;
    }
  }
  @media (min-width: 768px) {
    height: 64px;
  } ;
`;
export { StyledForm };
