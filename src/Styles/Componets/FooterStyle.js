import styled from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25vh;
  background-color: black;
  align-items: center;
  padding-left: 2vw;
  color: white;

  padding-left: 2vw;

  #braboMurilo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 600px;
    p {
      margin-bottom: 0;
    }
    #murilo {
      margin-left: 10px;
      margin-top: 0;
      margin-bottom: 15px;
    }
  }
  p {
    font-size: 18px;
    font-family: 'Sora, sans-serif';
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
    flex-direction: column;
    font-size: 25px;
     padding-left: 0vw;
     margin-top: 30vh;
     width: 100%;
     gap:20px;
     #braboMurilo {
      width: 200px;
      margin-left:20px;
      p{
        margin-bottom:0;
      }
      #murilo{
        margin-left:10px;
        margin-top:0;
        margin-bottom:15px;
      }
      color:white;
  }
}`}
`

export const SocialMidias = styled.div`
  display: flex;
  align-items: center;
  color: white;
  a {
    color: white;
    :hover {
      transform: scale(1.2);
      color: #9400d3;
    }
  }
  justify-content: space-between;
  width: 15vw;
  height: 8vh;
  padding: 50px;
  margin-left: 300px;
  ${`@media only screen and ${BreakPoints.device.cel}{
    gap:40px;
    width: 100%;
    padding: 0px;
    justify-content: center;
    margin-top:1vh
    margin-left: 0px;
    margin-right:290px;
}`}
`
