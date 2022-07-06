import React, { useState, useEffect, useCallback } from "react";

import people3 from "../../../Images/people3.jpeg";

import people6 from "../../../Images/person3.png";

import { Container } from "./style";

function RightTop() {
  const [showImage, setImage] = useState("image1");

  const changeImage = useCallback(() => {
    setTimeout(() => {
      if (showImage === "image1") {
        setImage("image2");
      } else if (showImage === "image2") {
        setImage("image1");
      } else {
        setImage("image1");
      }
    }, 12000);
  }, [showImage]);

  useEffect(() => {
    changeImage();
  }, [changeImage]);

  return (
    <Container>
      <img id={showImage === "image1" ? "show" : "hide"} src={people3} alt="" />
      <img id={showImage === "image2" ? "show" : "hide"} src={people6} alt="" />
    </Container>
  );
}

export default RightTop;
