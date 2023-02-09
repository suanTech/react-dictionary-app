import { useState } from "react";
import { ReactComponent as MoonIcon} from './../assets/images/icon-moon.svg';

// styles
import {
  StyledMoonIcon,
  Switch,
  ToggleSwitchInput,
  ToggleSwitchLabel,
} from "../../styles/toggleSwitch";

export const ToggleSwitch = ({ themeToggler }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    themeToggler();
  };
  return (
    <ToggleSwitchLabel>
      <ToggleSwitchInput
        type="checkbox"
        className="toggle"
        checked={checked}
        onChange={handleChange}
      />
      <Switch></Switch>
      <MoonIcon className="moonIcon"/>
    </ToggleSwitchLabel>
  );
};
