import styled from "styled-components";



const SearchBtn = styled.button`
  border: none;
  background: transparent;
`

const PlayBtn = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  & img {
    width: 100%;
  }
`

export {SearchBtn, PlayBtn}