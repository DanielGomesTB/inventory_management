import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--zinc-900);
`;

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--emerald-400);
`;

export const Table = styled.table`
  text-align: left;
  /* border-collapse: collapse; */

  thead {
    background-color: var(--emerald-900);

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
    background-color: var(--zinc-800);
  }
`;

export const ActionRow = styled.td`
  display: flex;
  justify-content:space-between;
  align-items: center;

  button {
    padding: 0;
    border-radius: 100%;
    font-size: 20rem;
    border: none;
    background-color: inherit;

    &:active {
      transform: scale(0.9)
    }

    &:hover {
      background-color: inherit;
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
    color: var(--zinc-950);

    &:focus {
      outline: var(--emerald-400) solid 2px;
    }
  }
  }
`;
