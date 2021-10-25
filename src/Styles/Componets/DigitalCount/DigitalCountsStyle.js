import styled, { keyframes } from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

const SlideFwd = keyframes`
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
  }
  100% {
    -webkit-transform: translateZ(160px);
            transform: translateZ(160px);
  }
`

export const BodyDigitalCount = styled.div`
  display: flex;
  width: 100%;
  height: 140vh;
  justify-content: center;

  ${`@media only screen and ${BreakPoints.device.cel}{
  flex-direction: column;
  p{
    font-size: 18px;
  }
}`}
`

export const DigitalCountLeft = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    animation: ${SlideFwd} 2s;
  }
  h5 {
    margin-bottom: 15px;
  }

  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  img{
    height: 100%;
    object-fit: contain;
  }
  justify-content: center;
}`}
`

export const DigitalCountRight = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  padding-left: 15vw;
  padding-right: 10vw;
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;

  padding-left: 5vw;
}`}
`

export const DigitalCountRightTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;

  h5 {
    text-transform: uppercase;
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    line-height: 140%;
    color: #9400d3;
  }
  p {
    color: #767576;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 140%;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 95%;
  height: 35vh;
  margin-top:15vh;

  h5 {
    text-transform: uppercase;
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    line-height: 140%;
    color: #9400d3;
    margin-bottom: 0;
  }
  p {
    color: #767576;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 120%;
  }
}`}
`
export const InfoDigitalCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10vh;
  width: 40vw;

  height: 50vh;
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  height: 40vh;
  margin-top:4vh;

}`}
`
