import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 50vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rem;
  font-weight: 600;
  background: linear-gradient(45deg, var(--emerald-900), var(--emerald-600));
  border-radius: 8px;
  width: 200px;
  height: 200px;

  transition: all 0.2s linear;

  &:hover {
    font-size: 16rem;
    svg {
      font-size: 48rem;
    }
  }
`;
