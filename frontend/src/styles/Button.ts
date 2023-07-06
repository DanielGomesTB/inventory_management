import styled from 'styled-components';

interface IButtonProps {
  danger?: boolean;
  padding?: boolean;
}

export const Button = styled.button<IButtonProps>`
  border-radius: 4px;
  color: var(--zinc-950);
  padding: '8px 16px';
  background-color: ${({danger}) => (danger ? 'var(--red-500)' :'var(--emerald-400)')};

  &:hover {
    background-color: ${({danger}) => (danger ? 'var(--red-400)' : 'var(--emerald-300)')};
  }

  &:active {
    transform: scale(0.98);
    background-color: ${({danger}) => (danger ? 'var(--red-600)' : 'var(--emerald-500)')};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    cursor: not-allowed;
    color: ${({danger}) => (danger ? 'var(--red-100)' : 'var(--emerald-100)')};
    background-color: ${({danger}) => (danger ? 'var(--red-800)' : 'var(--emerald-800)')};
  }
`;