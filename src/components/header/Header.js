import { SearchForm } from "./SearchForm";
import logo from "../../assets/images/logo.svg";
import { DropdownList } from "./DropdownList";
import { ToggleSwitch } from "./ToggleSwitch";

// styles
import {
  LogoImage,
  NavbarWrapper,
  SettingsWrapper,
} from "../../styles/header.js";

const Header = ({ themeToggler }) => {
  return (
    <header>
      <NavbarWrapper>
        <LogoImage src={logo} alt="logo"/>
        <SettingsWrapper>
          <DropdownList />
          <ToggleSwitch themeToggler={themeToggler}>Click me</ToggleSwitch>
        </SettingsWrapper>
      </NavbarWrapper>
      <SearchForm />
    </header>
  );
};


export default Header;
