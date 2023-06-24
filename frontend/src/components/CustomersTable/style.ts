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
  /* border-collapse: collapse; */

  thead {
    background-color: var(--main-green);

    th {
      padding: 2px 8px;
    }
  }

  td {
    padding: 0 4px;
    max-width: 250px;
    text-overflow: ellipsis;
  }

  tbody tr:nth-child(even) {
    background-color: var(--third-dark);
  }
`;

export const ActionRow = styled.td`
  display: flex;
  justify-content:space-between;
  align-items: center;

  button {
    border-radius: 100%;
    font-size: 20rem;
    border: none;
    background-color: inherit;

    &:active {
      transform: scale(0.9)
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: flex;
    gap: 8px;
    align-items: center;

    input {
    font-weight: 500;
    padding: 8px;
    color: var(--main-dark);

    &:focus {
      outline: var(--sec-green) solid 2px;
    }
  }
  }
`;
