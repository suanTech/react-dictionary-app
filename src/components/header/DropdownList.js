import { useState, useEffect } from "react";
import ArrowIcon from "./../../assets/images/icon-arrow-down.svg";

// styles
import {
  DropdownWrapper,
  SelectedItemWrapper,
  SelectListBox
} from "../../styles/dropdown";
import { BodyTextS } from "../../styles/text";

const fontFamilies = ["Sans Serif", "Serif", "Mono"];

export const DropdownList = () => {
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const [show, setShow] = useState(false);
  const displayDropdown = () => {
    setShow(!show);
  };
  const changeFontFamily = (selectedFont) => {
    let fontFamily = "";
    switch (selectedFont) {
      case "Sans Serif":
        fontFamily = "inter";
        break;
      case "Serif":
        fontFamily = "lora";
        break;
      case "Mono":
        fontFamily = "inconsolata";
        break;
      default: console.log('invalid fontFamily')
    }
    return fontFamily;
  };

  useEffect(() => {
    document.body.style.fontFamily = changeFontFamily(selectedFont);
  }, [selectedFont]);

  return (
    <DropdownWrapper>
      <SelectedItemWrapper
        onClick={displayDropdown}
        className={show ? "open" : ""}
      >
        <BodyTextS className="selected">{selectedFont}</BodyTextS>
        <ArrowIcon style={{ marginRight: "0" }} className="arrow-icon" />
      </SelectedItemWrapper>
      <SelectListBox className={!show ? "close" : "open"}>
        {fontFamilies.map((select, i) => (
          <BodyTextS 
            className="selected"
            key={i}
            onClick={() => {
              setSelectedFont(select);
              setShow(!show);
            }}
            style={{ fontFamily: changeFontFamily(select)}}
          >
              {select}
          </BodyTextS>
        ))}
      </SelectListBox>
    </DropdownWrapper>
  );
};
