import styled, { keyframes } from 'styled-components'

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

export const DigitalCountLeft = styled.div`
  display: flex;
  width: 30%;
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
`

export const DigitalCountRight = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  padding-left: 15vw;
  padding-right: 10vw;
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
`
export const InfoDigitalCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10vh;
  width: 40vw;
  height: 50vh;
`
