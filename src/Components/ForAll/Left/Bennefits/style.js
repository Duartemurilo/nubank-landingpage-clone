import styled from "styled-components";

export const BenefitsDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #9400d3;
  font-size: 16px;
  height: 68px;
  p {
    margin: 0;
  }
  @media (max-width: 1000px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;

export const CheckCircle = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  border-radius: 100%;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  max-height: 44px;
  p {
    margin: 0;
  }

  #title {
    color: black;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }

  p {
    color: #666566;
    line-height: 22px;
    font-size: 15px;
  }
`;
