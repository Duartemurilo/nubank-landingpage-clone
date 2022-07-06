import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  height: 884.219px;
  width: 78vw;
  gap: 80px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 90%;
  }
`;

export const Section = styled.div`
  height: 80%;
  width: 54%;
  width: 38vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h5 {
    color: #9400d3;
    text-align: start;
    margin: 0;
    text-transform: uppercase;
    font-family: Sora, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
  }
  h2 {
    text-align: start;
    font-family: Sora, sans-serif;
    font-weight: 700;
    margin: 0;
    line-height: 57.2px;
    font-size: 52px;
    margin-top: 6px;
  }
  #title {
    min-width: 700px;
    font-size: 35px;
    line-height: 35px;
  }
  p {
    margin-top: 10px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    p {
      font-size: 16px;
    }
    #title {
      min-width: 100%;
      font-size: 32px;
      line-height: 32px;
    }
  }
`;

export const ContainerInvest = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
  width: 38vw;

  h5 {
    margin: 0;
    text-transform: uppercase;
    font-family: Sora, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    color: black;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CardInvest = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 150px;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: auto;
  @media (max-width: 1000px) {
    width: 80%;
    h5 {
      font-size: 18px;
      width: 100%;
    }
    h2 {
      font-size: 35px;
    }
  }
`;

export const CardBtn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-image: linear-gradient(
      220.94deg,
      rgb(169, 80, 196) 14.43%,
      rgb(130, 38, 158) 85.28%
    );
    font-size: 35px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    .btn {
      height: 50px;
      width: 50px;
      font-size: 25px;
    }
  }
`;

export const ContainerValue = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 410px;
  justify-content: space-between;
  .card-btn-dowload {
    width: 100%;
    height: auto;
    display: flex;
    gap: 1vw;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      margin-bottom: 40px;
      height: 54px;
      width: 168px;
      cursor: pointer;
      border: none;
      background-color: white;
      gap: 3px;
      box-shadow: rgba(169, 80, 196, 0.05) 0px 17px 17px 0px,
        rgba(169, 80, 196, 0.086) 0px 5.125px 5.125px 0px,
        rgba(169, 80, 196, 0.067) 0px 2.12866px 2.12866px 0px,
        rgba(169, 80, 196, 0.047) 0px 0.7699px 0.7699px 0px;
      p {
        margin: 0;
        font-size: 14px;
        color: black;
        font-weight: bold;
      }
      img {
        height: 30px;
      }
    }
    @media (max-width: 1000px) {
    }
  }
`;

export const CardValue = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h5 {
    color: black;
  }
`;

export const Value = styled.div`
  width: 100%;
  height: auto;
  h2 {
    font-size: 60px;
  }
  #border {
    width: 100%;
    height: 5px;
    background-color: #9400d3;
  }
`;
