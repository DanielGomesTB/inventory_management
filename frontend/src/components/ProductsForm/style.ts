import styled from 'styled-components';

interface ILabelProps {
  width?: number;
}

interface IButtonProps {
  danger?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  .materials-info {
    display: flex;
    align-items: flex-end;
  }
`;

export const Button = styled.button<IButtonProps>`
  height: 40px;
  width: 20%;
  color: ${({danger}) => (danger ? 'var(--zinc-50)' : 'auto')};
  background-color: ${({danger}) => (danger ? 'var(--red-500)' : 'auto')};

  &:hover {
    color: ${({danger}) => (danger ? 'var(--zinc-50)' : 'auto')};
    background-color: ${({danger}) => (danger ? 'var(--red-400)' : 'auto')};
  }

  &:active {
    color: ${({danger}) => (danger ? 'var(--zinc-50)' : 'auto')};
    background-color: ${({danger}) => (danger ? 'var(--red-600)' : 'auto')};
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
    color: var(--zinc-950);

    &:focus {
      outline: var(--zinc-800) solid 2px;
    }
  }
`;