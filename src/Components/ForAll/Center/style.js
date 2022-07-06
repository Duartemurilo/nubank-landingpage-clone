import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22vw;
  max-width: 400px;
  border-radius: 50px;
  margin-left: 1.5rem;
  position: relative;
  height: auto;
  max-height: 1000px;
  @media (max-width: 1000px) {
    display: none;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: inherit;
    position: absolute;
    bottom: 50%;
    transition: all ease 3s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
`;
