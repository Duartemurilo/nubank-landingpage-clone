import styled from "styled-components";
import { SlideLeft } from "../../Constants/Animations";

export const ContainerBtn = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  margin-top: 4vh;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s ease;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    :hover {
      margin-left: 20px;
      .border {
        opacity: 1;
        animation: ${SlideLeft} ease 0.5s;
      }
      p {
        transition: 0.5s ease;
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease;
        transition-delay: 0s;
      }
    }
  }

  .text-container {
    margin-left: 12px;
    font-family: "Source Sans Pro", sans-serif;
    p {
      margin: 0;
      font-size: 17px;
      color: #82269e;
    }
    .border {
      width: 100%;
      height: 1px;
      background-color: #82269e;
      opacity: 0;
    }
  }
`;
