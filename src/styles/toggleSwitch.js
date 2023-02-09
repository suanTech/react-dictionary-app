import styled from "styled-components"
import { colors } from "./Theme"
import { ReactComponent as MoonIcon} from './../assets/images/icon-moon.svg';

const StyledMoonIcon = styled(MoonIcon)``;
const ToggleSwitchLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  max-width: 80px;
`
const Switch = styled.div`
  width: 40px;
  height: 20px;
  background: ${colors.grey};
  border-radius: 32px;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translate(0, -50%);
    transition: transform .2s ease-in;
  }
`

const ToggleSwitchInput = styled.input`
  display: none;
  &:checked + ${Switch} {
    background: ${colors.primary};
    &:after {
      transform: translate(20px, -50%);
    }
  };
  &:checked ~ ${StyledMoonIcon} path {
    stroke: ${colors.primary};
  }
`

export {ToggleSwitchLabel, ToggleSwitchInput, Switch, StyledMoonIcon}