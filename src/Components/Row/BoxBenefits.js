import React from "react";

import { CardBennefits, IconBenefits } from "./style";

function BoxBenefits({ Icon, text }) {
  return (
    <CardBennefits>
      <IconBenefits>
        <Icon style={{ fontSize: 40 }} />
      </IconBenefits>
      <p>{text}</p>
    </CardBennefits>
  );
}

export default BoxBenefits;
