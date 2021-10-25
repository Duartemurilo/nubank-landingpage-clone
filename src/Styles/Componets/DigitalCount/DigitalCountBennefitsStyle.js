import styled from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const DivInfoBennefits = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;

  h4 {
    margin: 0;
    margin-left: 1vw;
  }
  p {
    margin: 0;
    margin-top: 6px;
    margin-left: 1vw;
    font-size: 15px;
    color: #767576;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
     width: 95%;
     height: 100%;
     gap:20px;
     p {
    font-size: 17px;
  }
}`}
`
export const IconDigitalCount = styled.div`
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
     width: 14%;
     max-width: 14%;
     min-width: 14%;
}`}
`
