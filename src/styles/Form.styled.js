import styled from "styled-components"
import { colors } from "./Theme";

// Search form
const StyledForm = styled.form`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 20px;
  margin: 23px 0;
  border: none;
  border-radius: 1rem;
  background: ${({theme}) => theme.inputBg};
  :focus-within {
    outline: 1px solid ${colors.primary}
  };
  @media(min-width: 768px){
    height: 64px;
    margin: 50px 0;
  };
`
const SearchInput = styled.input`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.text};
  ::placeholder {
    font-size: 16px;
    color: ${({theme}) => theme.grey}
  };
  @media(min-width: 768px) {
    font-size: 20px;
  }
`
export {StyledForm, SearchInput}