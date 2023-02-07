import styled, { keyframes } from "styled-components";
import { colors } from "./Theme";

const rollDown = keyframes`
 from {
    transform: translateY(-10px);
    height: 0;
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    height: 100%;
  }
`;

const rollUp = keyframes`
 from {
    transform: translateY(0);
    opacity: 1;
    height: 100%;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
    height: 0;
  }
`;
// wrapper
const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin-left: auto;
`;
const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const SelectListBox = styled.div`
  position: absolute;
  text-align: right;
  width: 80px;
  left: 10px;
  animation: ${rollUp} 0.2s;
  transition: animation 0.3s;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  &.close {
    height: 0px;
    overflow: hidden;
  }
  &.open {
    animation: ${rollDown} 0.2s;
  }
`;
const SelectedItemWrapper = styled.div`
  cursor: pointer;
  padding: 7px 15px;
  border-right: 1px solid ${colors.lightGrey};
  height: 100%;
  margin-left: auto;
  margin-right: 15px;
  overflow: hidden;
  &.open > .arrow-icon {
    transform: rotate(180deg);
  }
`;
const SelectListItems = styled.div`
  cursor: pointer;
  padding: 5px;
  font-size: 0.9em;
  background: ${({ theme }) => `rgba(${theme.bg.rgb}, 0.6)`};
  &:hover {
    color: ${colors.primary};
  }
`;

export {
  NavbarWrapper,
  SettingsWrapper,
  DropdownWrapper,
  SelectedItemWrapper,
  SelectListBox,
  SelectListItems,
};
