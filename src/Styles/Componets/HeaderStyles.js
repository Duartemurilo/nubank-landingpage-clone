import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  transition: all ease 2s;
  position: fixed;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-around;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  width: 35%;
  color: #9400d3;
  height: 8vh;
  a {
    margin-right: -40px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 8vh;
  justify-content: flex-end;
`

export const NavLinks = styled.a`
  font-family: 'Source Sans Pro', sans-serif;
  margin-right: -1;
  font-size: 15px;
  line-height: 140%;
  text-decoration: none;
  cursor: pointer;
  margin-left: 2vw;
  display: flex;
  align-items: center;
  color: #232224;
  :hover {
    opacity: 0.9;
  }
`

export const ButtonLogin = styled.p`
  margin-top: 2px;
  margin-left: 2vw;
  margin-right: 5vw;
  margin-bottom: 0px;
  font-size: 15px;
  cursor: pointer;
`
