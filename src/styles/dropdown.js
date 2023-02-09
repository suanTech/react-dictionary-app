import styled, { keyframes } from "styled-components";
import { colors } from "./Theme";

// dropdown box animation
const rollDown = keyframes`
 from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    height: 35vh;
    max-height: 152px;
  }
`;

const DropdownWrapper = styled.div`
  flex: 1;
  position: relative;
`;

// dropdown list
const SelectListBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 45px;
  width: 32vw;
  max-width: 180px;
  height: 35vh;
  max-height: 152px;
  padding: 10px 0 10px 15px;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.2s ease-in, background-color 0.1s linear;
  box-shadow: ${({ theme }) => `${theme.boxShadow}`} 0px 4px 20px 4px;
  background-color: ${({ theme }) => theme.boxBg};
  &.close {
    height: 0px;
    transform: translateY(-15px);
    opacity: 0;
    overflow: hidden;
  }
  &.open {
    animation: ${rollDown} 0.2s ease-in;
  }
`;
const SelectedItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  gap: .5rem;
  padding-right: 20px;
  border-right: 1px solid ${colors.lightGrey};
  overflow: hidden;
  &.open > .arrow-icon {
    transform: rotate(180deg);
  }
`;

export { DropdownWrapper, SelectedItemWrapper, SelectListBox };
