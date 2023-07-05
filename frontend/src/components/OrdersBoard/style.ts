import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: var(--zinc-800);

  > header {
    padding: 8px;
    font-size: 14rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    padding: 16px;
    background: var(--zinc-50);
    border-radius: 8px;
    height: 128px;
    border: 1px solid var(--zinc-900);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14rem;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;

export const ColoredText = styled.strong`
  color: ${({color}) => `var(--main-${color})`};
`;
