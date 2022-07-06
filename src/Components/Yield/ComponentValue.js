import React from "react";
import playStore from "../../Images/playstore.svg";
import apple from "../../Images/appstore.svg";

import { CardValue, Value } from "./style";

function ComponentValue({ value }) {
  return (
    <>
      <CardValue>
        <h5>Em um ano você teria!</h5>
        <Value>
          <h2>{value}</h2>
          <div id="border" />
        </Value>
      </CardValue>
      <p>
        Esses valores não são uma garantia de rentabilidade futura, mas uma
        estimativa projetada na taxa do CDI de hoje para todo o período em que
        seu depósito permanecer na Conta do Nubank
      </p>
      <div className="card-btn-dowload">
        <button>
          <img src={apple} alt="" />
          <p> Apple Store</p>
        </button>
        <button>
          <img src={playStore} alt="" />
          <p>Google Store</p>
        </button>
      </div>
    </>
  );
}

export default ComponentValue;
