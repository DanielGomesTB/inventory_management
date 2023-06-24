import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--sec-dark);
`;

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--sec-green);
`;

export const Table = styled.table`
  text-align: left;

  thead {
    background-color: var(--main-green);

    th {
      padding: 2px 8px;
    }
  }
`;

export const ActionRow = styled.td`
  display: flex;
  justify-content:space-between;
  
  button {
    border-radius: 100%;
    font-size: 20rem;
    border: none;
    background-color: inherit;
  }
`;
