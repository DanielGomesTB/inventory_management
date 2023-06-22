import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  height: 80px;
  padding: 0 24px;
`;

export const Title = styled.h1`
  position: relative;

  &::before {
    content: " ";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: var(--main-green);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;