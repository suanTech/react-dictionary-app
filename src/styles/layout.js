import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: auto;
  @media (min-width: 768px) {
    margin: 40px auto;
    padding: 0 20px;
  }
`
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
`
