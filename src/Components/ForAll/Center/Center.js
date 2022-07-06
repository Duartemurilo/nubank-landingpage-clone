import React, { useState, useEffect, useCallback } from "react";

import people1 from "../../../Images/People1.jpeg";
import people2 from "../../../Images/people2.jpeg";

import { Container } from "./style";

function Center() {
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
      <img
        className={showImage === "image1" ? "show" : "hide"}
        src={people1}
        alt=""
      />
      <img
        className={showImage === "image2" ? "show" : "hide"}
        src={people2}
        alt=" "
      />
    </Container>
  );
}

export default Center;
