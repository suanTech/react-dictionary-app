import styled from "styled-components"
import { colors } from "./Theme";


// Search form
const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 25px;
  margin: 23px 0;
  border: none;
  border-radius: 18px;
  background: ${colors.lighterGrey};
`
const SearchInput = styled.input`
  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    font-size: 16px;
    color: ${colors.grey};
  }
`

export {SearchInputWrapper, SearchInput}