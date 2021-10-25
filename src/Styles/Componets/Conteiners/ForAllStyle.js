import styled from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const BodyForAll = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  ${`@media only screen and ${BreakPoints.device.cel}{
  flex-direction: column;
  height: 100vh;

}`}
`
