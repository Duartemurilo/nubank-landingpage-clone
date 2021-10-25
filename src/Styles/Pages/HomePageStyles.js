import styled from 'styled-components'
import BreakPoints from '../../Constants/breakPoints'

export const HomePageContainer = styled.div`
  display: flex;
  font-family: 'Sora', sans-serif;
  flex-direction: column;
  width: 100%;
  background-color: #ededed;
  overflow-x: hidden;

  ${`@media only screen and ${BreakPoints.device.cel}{
  width: 100%;
  height: 100%;
  gap:20px;
  font-size:20px;
}`}
`

export const Gradiente = styled.div`
  height: 20vh;
  width: 100%;
`
