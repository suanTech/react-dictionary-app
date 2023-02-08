import styled, { keyframes } from "styled-components";
import { colors, fontSize } from "./Theme";

// dropdown box animation
const rollDown = keyframes`
 from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    height: 110px;
  }
`;

const LogoImage = styled.img`
  width: 29px;
  @media(min-width: 768px) {
    width: 32px;
  }
`
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

// dropdown list
const SelectListBox = styled.div`
  position: absolute;
  right: 30px;
  width: 30vw;
  max-width: 130px;
  height: 110px;
  padding: 15px 10px;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.3s linear, background-color .1s linear;
  box-shadow: ${({theme}) => `${theme.boxShadow}`} 0px 5px 15px;
  ${'' /* box-shadow: ${({theme}) => `${theme.boxShadow}`} 0px 3px 10px, ${({theme}) => `${theme.boxShadow}`} 0px 16px 30px, ${({theme}) => `${theme.boxShadow}`} 0px 3px 4px, ${({theme}) => `${theme.boxShadow}`} 0px 3px 4px; */}
  background-color: ${({theme}) => theme.boxBg};
  &.close {
    height: 0px;
    transform: translateY(-15px);
    opacity: 0;
    visibility: hidden;
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
  font-size: ${fontSize.bodyS};
  font-weight: 600;
  &:hover {
    color: ${colors.primary};
  }
`;

export {
  LogoImage,
  NavbarWrapper,
  SettingsWrapper,
  DropdownWrapper,
  SelectedItemWrapper,
  SelectListBox,
  SelectListItems,
};
