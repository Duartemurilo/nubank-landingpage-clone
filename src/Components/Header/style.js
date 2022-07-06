import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  transition: all ease 2s;
  z-index: 4;
  .white {
    background-color: rgb(247, 242, 250);
    box-shadow: rgba(169, 80, 196, 0.08) 0px 51px 80px 0px,
      rgba(169, 80, 196, 0.05) 0px 15.375px 24.1177px 0px,
      rgba(169, 80, 196, 0.04) 0px 6.38599px 10.0172px 0px,
      rgba(169, 80, 196, 0.027) 0px 2.30969px 3.62304px 0px;
  }
`;

export const HeaderBody = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  width: 78vw;
  max-width: 1440px;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    justify-content: space-evenly;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  width: 780px;
  color: #9400d3;
  height: 48px;
  .btn-menu {
    display: none;
  }
  img {
    width: 48px;
    height: 38px;
  }
  @media (max-width: 1000px) {
    width: 40%;
    justify-content: space-between;
    img {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .btn-menu {
      display: flex;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  height: 46px;
  width: auto;
  gap: 8px;
  margin-left: 20px;
  @media (max-width: 1000px) {
    display: none;
  }
  a {
    display: flex;
    cursor: pointer;
    line-height: 24px;
    color: black;
    align-items: center;
    max-height: inherit;
    justify-content: space-between;
    padding: 12px 0px 12px 16px;
    text-decoration: none;
    gap: 2px;
    font-weight: 10;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  height: 45px;
  width: 613.766px;
  font-family: "Source Sans Pro", sans-serif;

  p {
    margin-left: 1rem;
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 40%;
    button {
      display: none;
    }
  }
`;
