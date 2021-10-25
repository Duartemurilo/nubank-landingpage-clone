import styled from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const ForAllLeftDIV = styled.div`
  padding: 30px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  font-family: 'Sora', sans-serif;
  height: 80vh;
  h2 {
    color: #9400d3;
    font-size: 18px;
    margin-bottom: 10;
  }
  h1 {
    font-size: 4vw;
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    font-size: 14px;
    color: #767576;
  }
  width: 33%;
  ${`@media only screen and ${BreakPoints.device.cel}{
    width: 100%;
    
    p {
    font-size: 20px;
    color: #767576;
  }
    padding:0px;
    padding-left:15px;
    h1{
      font-size: 40px;
   
    }
    #DivButtomBenfits{
     
      width: 90%;
    }
  }`}
`

export const ContainerResume = styled.div`
  ${`@media only screen and ${BreakPoints.device.cel}{
    width: 95%;
   
  }`}
`

export const ContainerBenefits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${`@media only screen and ${BreakPoints.device.cel}{
    width: 100%;
   
  }`}
`
