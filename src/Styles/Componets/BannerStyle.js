import styled, { keyframes } from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

const SlideBottom = keyframes`
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
`

export const BodyBanner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  ${`@media only screen and ${BreakPoints.device.cel}{
    flex-direction: column;
    align-items: center;
    p{
    font-size: 18px;
  }
  }`}
`

export const BodyBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #232224;
  width: 40%;
  font-family: 'Sora', sans-serif;

  font-size: 35px;
  animation: ${SlideBottom} 2s;
  ${`@media only screen and ${BreakPoints.device.cel}{
    width: 100%;
    height:30vh;
    gap:30px;
    margin-top:10vh;
    padding-left: 90px;
   h1{
    font-size: 30px;
   }
   div{
   width: 80%;
   }
  }`}
`

export const TextoBanner = styled.div`
  display: flex;
  margin-top: -40px;
  align-items: center;
  height: 10vh;
  width: 97%;
  color: #232224;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
`

export const BodyBannerRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6vh;
  width: 50%;
  height: 100%;
  ${`@media only screen and ${BreakPoints.device.cel}{

    width: 100%;
    margin-top: 2vh;
    align-items: center;
}`}
`
const entrance = keyframes`
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
`

export const CardImage = styled.img`
  object-fit: cover;
  height: 50%;
  margin-left: 10vw;
  animation: ${entrance} 2s;
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 80%;
  height: 100%;
  object-fit: contain;

}`}
`
