import React from "react";
import { ContainerBtn } from "./style";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function SlideBtn({ text }) {
  return (
    <ContainerBtn>
      <a href="/home">
        <ArrowForwardIcon style={{ color: "#82269e" }} />
        <div className="text-container">
          <p>{text} </p>
          <div className=" border" />
        </div>
      </a>
    </ContainerBtn>
  );
}

export default SlideBtn;
