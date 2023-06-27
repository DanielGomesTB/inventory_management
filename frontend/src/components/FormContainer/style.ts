import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--main-green);

  div {
    display: flex;
    gap: 16px;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--main-white);
  }

  button {
    color: var(--main-dark);
    text-align: center;
    font-weight: 600;
    width: 160px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: var(--sec-green);

    &:hover {
      color: var(--main-dark);
      background: var(--third-green);
    }

    &:active {
      transform: scale(0.95)
    }

    &:disabled {
      color: var(--third-dark);
      background: var(--third-green);
      transform: none;
    }
  }
`;
