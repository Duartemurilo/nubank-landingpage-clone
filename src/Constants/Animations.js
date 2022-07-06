import { keyframes } from "styled-components";

export const slideTopBottom = keyframes`

  0% {
    -webkit-transform: translateY(-0px);
            transform: translateY(-0px);
  }

  25% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }

   75% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
`;

export const SlideLeft = keyframes`
   0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
 `;

export const entrance = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

export const SlideBottom = keyframes`
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;
