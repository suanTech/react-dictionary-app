import styled from "styled-components"
import { colors } from "./Theme"
const BoldText = `
  font-weight: bold;
  font-size: 14px;
`

const SelectedFont = styled.span`
  ${BoldText};
  margin-right: 15px;
  min-width: 70px;
  text-align: right;
  display: inline-block;
`

const PronunciationText = styled.p`
  color: ${colors.primary};
  font-size: 18px;
`

export {SelectedFont, PronunciationText}