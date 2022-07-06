import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function NavLink({ text }) {
  return (
    <a href="/">
      {text}
      <KeyboardArrowDownIcon style={{ cursor: "pointer" }} />
    </a>
  );
}

export default NavLink;
