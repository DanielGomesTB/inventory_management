import styled from 'styled-components';

interface ILabelProps {
  width?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  .materials-info {
    display: flex;
    align-items: flex-end;
  }

  button {
    height: 40px;
    width: 20%;

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      transform: scale(0.98)
    }

    &:disabled {
      color: var(--third-dark);
      background: var(--third-green);
      transform: none;
    }
  }
`;

export const CustomLabel = styled.label<ILabelProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({width}) => (width ? `${width}%` : 'auto')};
  font-size: 14rem;
  font-weight: 500;

  input,
  select {
    font-weight: 500;
    padding: 8px;
    color: var(--main-dark);

    &:focus {
      outline: var(--third-dark) solid 2px;
    }
  }
`;