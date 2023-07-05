import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--emerald-900);

  div {
    display: flex;
    gap: 16px;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--zinc-50);
  }

  button {
    width: 160px;
  }
`;
