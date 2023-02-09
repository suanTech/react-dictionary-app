import styled from "styled-components";

const LogoImage = styled.img`
  width: 29px;
  @media(min-width: 768px) {
    width: 32px;
  }
`
// wrapper
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media(min-width: 768px) {
    margin: 45px 0;
  }
`;
const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  max-width: 300px;
  gap: 7%;
`;

export {
  LogoImage,
  NavbarWrapper,
  SettingsWrapper,
};
