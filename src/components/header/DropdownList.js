import { useState, useEffect } from "react";
import ArrowIcon from "./../../assets/images/icon-arrow-down.svg";

// styles
import { DropdownWrapper, SelectedItemWrapper, SelectListBox, SelectListItems } from "../../styles/Header.styled";
import { SelectedFont } from "../../styles/Text.styled";

const fontFamilies = ["Sans Serif", "Serif", "Mono"];

export const DropdownList = () => {
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const [show, setShow] = useState(false);
  const displayDropdown = () => {
    setShow(!show);
  };
  const fontFamily =
    selectedFont === "Sans Serif"
      ? "inter"
      : selectedFont === "Serif"
      ? "lora"
      : selectedFont === "Mono"
      ? "inconsolata"
      : "";
  useEffect(() => {
    document.body.style.fontFamily = fontFamily;
  }, [fontFamily]);

  return (
    <DropdownWrapper>
      <SelectedItemWrapper
        onClick={displayDropdown}
        className={show ? "open" : ""}
      >
        <SelectedFont>{selectedFont}</SelectedFont>
        <ArrowIcon style={{ marginRight: "0" }} className="arrow-icon" />
      </SelectedItemWrapper>
      <SelectListBox className={show ? "open" : "close"}>
        {fontFamilies.map((fontFamily, i) => (
          <SelectListItems
            key={i}
            onClick={() => {
              setSelectedFont(fontFamily);
              setShow(!show);
            }}
          >
            {fontFamily}
          </SelectListItems>
        ))}
      </SelectListBox>
    </DropdownWrapper>
  );
};