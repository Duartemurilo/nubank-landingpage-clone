import styled, { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2vw;
  height: 100%;
  width: 30vw;
  margin-top: 10vh;
`

export const ImageCenter = styled.img`
  object-fit: cover;
  height: 80%;
  border-radius: 70px;
  width: 90%;
  transition: all ease 2s;
  animation: ${FadeIn} all ease 2s;
`

export const Image2Center = styled.img`
  object-fit: cover;
  height: 80%;
  border-radius: 70px;
  width: 90%;
  transition: all ease 5s;
`