import React from "react";
import { CardInvest, Left, CardBtn } from "./style";

function CardInvestComponent({ title, value, fun, complement, type }) {
  return (
    <CardInvest>
      <Left>
        <h5>{title}</h5>
        <h2>
          {value}
          <span> {!!complement && complement}</span>
        </h2>
      </Left>
      <CardBtn>
        <button className="btn" onClick={() => fun("+", value, type)}>
          +
        </button>
        <button className="btn" onClick={() => fun("-", value, type)}>
          -
        </button>
      </CardBtn>
    </CardInvest>
  );
}

export default CardInvestComponent;
