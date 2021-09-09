import styled, { keyframes } from 'styled-components'

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export const LinkButton = styled.a`
  display: flex;
  cursor: pointer;
  width: 12vw;
  font-size: 14px;
  height: 6vh;
  background: linear-gradient(90deg, rgba(190, 68, 242, 1) 64%, rgba(237, 111, 234, 1) 100%);
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 8vh;
  background-color: white;
  border-radius: 10px;
  color: #9400d3;
  margin-bottom: 0;
`

export const ButtonBenefits = styled.p`
  margin-left: 14px;
  transition: all ease;
`

const SlideLeft = keyframes`
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
 `

export const BottomBorder = styled.div`
  opacity: 0;
  margin-top: -15px;
  width: 90%;
  margin-left: 1vw;
  border-bottom: 2px solid #9400d3;

  :hover {
    opacity: 1;
    animation: ${SlideLeft} ease 1s;
  }
`

export const DivButtomBenfits = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.8vw;
  font-size: 16px;
  color: #9400d3;
  cursor: pointer;
  width: 100%;
  height: 6vh;
  margin-top: 25px;
  align-items: flex-end;
  :hover {
    transform: translate(20px, 0px);
    transition: 0.3s ease-out;
    opacity: 1;
  }
`
