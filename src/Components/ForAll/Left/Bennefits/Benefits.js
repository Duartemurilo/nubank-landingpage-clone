import React from "react";

import CheckIcon from "@material-ui/icons/Check";
import { BenefitsDiv, CheckCircle, ContainerText } from "./style";

function Benefits({ title, text }) {
  return (
    <BenefitsDiv>
      <CheckCircle>
        <CheckIcon />
      </CheckCircle>

      <ContainerText>
        <strong id="title">{title}</strong>
        <p id="text">{text}</p>
      </ContainerText>
    </BenefitsDiv>
  );
}

export default Benefits;
