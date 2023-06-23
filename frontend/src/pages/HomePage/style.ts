import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rem;
  font-weight: 600;
  background-color: var(--main-green);
  border-radius: 8px;
  width: 200px;
  height: 200px;

  transition: all 0.25s linear;

  &:hover {
    font-size: 12rem;
    svg {
      font-size: 48rem;
    }
  }

  &:nth-child(1) {
      background: linear-gradient(135deg, var(--main-green), var(--third-green));
    }

    &:nth-child(2) {
      background: linear-gradient(180deg, var(--main-green), var(--third-green));
    }

    &:nth-child(3) {
      background: linear-gradient(45deg, var(--main-green), var(--third-green));
    }

    &:nth-child(4) {
      background: linear-gradient(90deg, var(--main-green), var(--third-green));
    }
`;
