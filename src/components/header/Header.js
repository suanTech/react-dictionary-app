import { SearchForm } from "./SearchForm";
import logo from "./../../logo.svg?url";
import { DropdownList } from "./DropdownList";
import { ToggleSwitch } from "./ToggleSwitch";

// styles
import {
  LogoImage,
  NavbarWrapper,
  SettingsWrapper,
} from "../../styles/header.styled";

const Header = ({ themeToggler }) => {
  return (
    <>
      <NavbarWrapper>
        <LogoImage src={logo} />
        <SettingsWrapper>
          <DropdownList />
          <ToggleSwitch themeToggler={themeToggler}>Click me</ToggleSwitch>
        </SettingsWrapper>
      </NavbarWrapper>
      <SearchForm />
    </>
  );
};


export default Header;
