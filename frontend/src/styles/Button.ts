import styled from 'styled-components';

interface IButtonProps {
  danger?: boolean;
  padding?: boolean;
}

export const Button = styled.button<IButtonProps>`
  padding: ${({padding}) => (padding ? 'auto' : '0')};
  color: ${({danger}) => (danger ? 'var(--zinc-950)' : 'auto')};
  background-color: ${({danger}) => (danger ? 'var(--red-500)' : 'auto')};

  &:hover {
    background-color: ${({danger}) => (danger ? 'var(--red-400)' : 'auto')};
  }

  &:active {
    transform: scale(0.98);
    background-color: ${({danger}) => (danger ? 'var(--red-600)' : 'auto')};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    cursor: not-allowed;
    color: ${({danger}) => (danger ? 'var(--red-100)' : 'auto')};
    background-color: ${({danger}) => (danger ? 'var(--red-800)' : 'auto')};
  }
`;