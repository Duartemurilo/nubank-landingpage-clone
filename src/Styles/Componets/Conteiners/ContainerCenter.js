import styled, { keyframes } from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2vw;
  height: 100%;
  width: 30vw;

  margin-top: 10vh;
  #image1 {
    object-fit: cover;
    height: 80%;
    border-radius: 70px;
    width: 90%;
    transition: all ease 2s;
    animation: ${FadeIn} all ease 2s;
  }
  #image2 {
    object-fit: cover;
    height: 80%;
    border-radius: 70px;
    width: 90%;
    transition: all ease 5s;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  margin-left: 0vw;

}`}
`
