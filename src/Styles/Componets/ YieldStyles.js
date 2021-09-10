import styled from 'styled-components'

export const YieldLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
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

export const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4vh;
  height: 15vh;
  width: 80%;
  padding-left: 10px;
  h5 {
    text-transform: uppercase;
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    color: #232224;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const ContainerValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  width: 100%;
  p {
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 48px;
    color: black;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const ButtomYield = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9400d3;
  border-radius: 100px;
  width: 4vw;
  height: 4vw;
  margin-left: 2vw;
  color: white;
  font-size: 1.5vw;
  cursor: pointer;
`
export const YieldRight = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  h5 {
    background-clip: text;
    font-weight: bold;
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    color: #232224;
    margin-bottom: 0;
  }
`

export const YieldValues = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 80%;
  padding: 5px;
  padding-right: 50px;
`

export const BorderBottomYiel = styled.div`
  background-color: rgb(130, 10, 209);
  height: 0.6vh;
  width: 90%;
`

export const TotalValue = styled.p`
  color: black;
  margin-top: 1vh;
  font-family: 'Sora', sans-serif;
  font-size: 80px;
  margin-bottom: 0px;
  margin-bottom: 0;
`

export const Text = styled.p`
  color: #767576;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  margin-top: 26vh;
  margin-bottom: 0;
`
