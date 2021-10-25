import styled from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

export const BodyRow = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 30vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #9400d3;

  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  margin-top: 15vh;
  margin-left: 0vw;
  justify-content: flex-start;
  height: 120vh;

}`}
`

export const RowBenefitsContainer = styled.div`
  display: flex;
  height: 40vh;
  border-radius: 30px;
  width: 90vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f2fa;
  ${`@media only screen and ${BreakPoints.device.cel}{
  height: 105vh;
  width: 90%;
  flex-direction: column;

}`}
`
export const RowBenefitsLeft = styled.div`
  display: flex;
  height: 40vh;
  background-color: #f7f2fa;
  border-radius: 30px;
  width: 30%;
  border-bottom-right-radius: 0px;
  align-items: center;

  p {
    font-size: 20px;
    font-family: 'Sora', sans-serif;
    margin: 0;
  }
  h2 {
    color: #232224;
    font-family: 'Sora', sans-serif;
    font-size: 52px;
    line-height: 100%;
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  div{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left:0;
    align-items: center;
   p{
     margin:10px;
     font-size: 18px;
   }
   h2{
    margin-left:15vw;
   }
  }
}`}
`
export const RowBenefitsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f2fa;
  height: 40vh;
  border-radius: 30px;
  width: 100%;
  border-bottom-left-radius: 0px;

  ${`@media only screen and ${BreakPoints.device.cel}{
  height: 100%;
  border-bottom-left-radius: 50px;
}`}
`

export const RowContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${`@media only screen and ${BreakPoints.device.cel}{
   flex-direction: column;
   height: 100%;
}`}
`

export const IconBenefits = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  width: 5vw;
  border-radius: 10px;
  height: 8vh;
  box-shadow: -4px 2px 15px 3px rgba(148, 0, 211, 0.25);
  transition: all ease 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 15vw;
 
}`}
`
export const ContainerTextIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: 2vw;

  p {
    font-size: 16px;
    margin-top: 0;
    color: #232224;
  }

  ${`@media only screen and ${BreakPoints.device.cel}{
    margin-top: 2vh;
    flex-direction: row;
    align-items: center;
    width: 90%;
    gap:10px
}`}
`
