import styled from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

export const BenefitsDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  height: 7vh;
  color: #9400d3;
  font-size: 16px;
  margin-left: 1.8vw;

  p {
    margin-left: 16px;
    margin-bottom: 0;
    margin-top: 0;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
    margin-top:1vh;
    width: 90%;;
}`}
`

export const CheckCircle = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 3vw;
  height: 80%;
  border-radius: 580px;
  ${`@media only screen and ${BreakPoints.device.cel}{
   border-radius: 50%;
    width: 15vw;
}`}
`
