import styled from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

export const BodyCards = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  ${`@media only screen and ${BreakPoints.device.cel}{
  flex-direction: column;
  height: 110vh;
  margin-top: 20vh;
}`}
`

export const CardLeft = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 50px;
  h5 {
    text-transform: uppercase;
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    line-height: 140%;
    color: #9400d3;
    margin-bottom: 10px;
  }
  h2 {
    color: #232224;
    font-family: 'Sora', sans-serif;
    font-size: 52px;
    line-height: 100%;
    margin-top: 0;
    margin-bottom: 28px;
  }
  p {
    color: #767576;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 0;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
  padding-left: 20px;
  width: 96%;
  margin-top: 10px;
  h2 {
    margin-top: 10px;
    margin-bottom: 18px;
  }
}`}
`

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 8vh;

  height: 8vh;
  ${`@media only screen and ${BreakPoints.device.cel}{

  width: 95%;
  gap:20px;
  margin-top: 4vh;
  height: 10vh;
}`}
`
export const CardRight = styled.div`
  display: flex;
  width: 40%;
  height: 100%;

  img {
    width: 80%;
    height: 90%;
    object-fit: cover;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
     width: 100%;
     align-items: center;
     justify-content: center;
}`}
`
export const IconCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 8vh;
  background-color: white;
  border-radius: 10px;
  color: #9400d3;
  margin-bottom: 0;
  ${`@media only screen and ${BreakPoints.device.cel}{
     width: 30vw;
  
}`}
`
