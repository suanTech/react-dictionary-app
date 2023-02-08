import styled from "styled-components";

const SearchBtn = styled.button`
  border: none;
  background: transparent;
`

const PlayBtn = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  cursor: pointer;
  & img {
    width: 100%;
  }
  @media(min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`

export {SearchBtn, PlayBtn}