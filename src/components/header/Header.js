import { SearchForm } from "./SearchForm";
import Logo from "./../../logo.svg";
import { DropdownList } from "./DropdownList";
import { ToggleSwitch } from "./ToggleSwitch";

// styles
import {
  NavbarWrapper,
  SettingsWrapper,
} from "../../styles/Header.styled";



const Header = ({ themeToggler }) => {
  return (
    <>
      <NavbarWrapper>
        <Logo style={{ transform: "scale(.9)" }} />
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
