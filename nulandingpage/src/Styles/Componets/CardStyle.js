import styled from 'styled-components'

export const CardLeft = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 50px;
  h5 {
    text-transform: uppercase;
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    line-height: 140%;
    color: #9400d3;
    margin-bottom: 0;
  }
  h2 {
    color: #232224;
    font-family: 'Sora', sans-serif;
    font-size: 52px;
    line-height: 100%;
    margin-top: 0;
    margin-bottom: 8px;
  }
  p {
    color: #767576;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 8vh;
  height: 8vh;
`
export const CardRight = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  img {
    width: 80%;
    height: 90%;
    object-fit: cover;
  }
`
