import styled from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const ForAllRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
  height: 120vh;
  width: 30vw;

  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  margin-left: 0vw;

}`}
`

export const ImageRight = styled.img`
  object-fit: cover;
  margin-top: 8vh;
  height: 70vh;
  border-radius: 60px;
  width: 90%;
  transition: all ease 2s;
`
export const Image2Right = styled.img`
  object-fit: cover;
  object-position: center;
  margin-top: 6vh;
  height: 50vh;
  border-radius: 70px;
  width: 90%;
  transition: all ease 2s;
`
