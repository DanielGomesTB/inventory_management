import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: var(--zinc-900);

  .boards {
    display: flex;
    justify-content: space-around;
    gap: 32px;
  }
`;

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--emerald-400);
`;