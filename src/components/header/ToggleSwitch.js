import { useState } from "react";

// styles
import {
  StyledMoonIcon,
  Switch,
  ToggleSwitchInput,
  ToggleSwitchLabel,
} from "../../styles/ToggleSwitch.styled";

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
      <StyledMoonIcon />
    </ToggleSwitchLabel>
  );
};
