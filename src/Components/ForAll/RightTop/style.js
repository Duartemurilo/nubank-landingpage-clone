import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 50px;
  position: relative;
  height: auto;
  max-height: 200px;

  img {
    width: 100%;

    height: auto;
    max-height: 420px;
    object-fit: cover;
    border-radius: inherit;
    position: absolute;
    transition: all ease 3s;
    position: absolute;
    top: 0px;
    right: 0px;
  }

  #show {
    opacity: 1;
  }
  #hide {
    opacity: 0;
  }
`;
