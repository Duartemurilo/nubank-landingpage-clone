import React from "react";
import { CardNav } from "./styles";

function NavComponent({ title, text }) {
  return (
    <CardNav>
      <h4>{title}</h4>
      <div className="nav">
        {text.map((link) => {
          return <p>{link.text}</p>;
        })}
      </div>
    </CardNav>
  );
}

export default NavComponent;
