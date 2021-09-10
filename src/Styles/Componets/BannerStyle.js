import styled, { keyframes } from 'styled-components'

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
`

export const BodyBannerRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6vh;
  width: 50%;
  height: 100%;
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
`

export const TextoBanner = styled.div`
  display: flex;
  margin-top: -50px;
  align-items: center;
  height: 10vh;
  width: 97%;
  color: #232224;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
`
