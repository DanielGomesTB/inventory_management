import styled from 'styled-components';

interface IButtonProps {
  danger?: boolean;
}

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;;
  background: var(--zinc-800);
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  img{
    border-radius: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Text = styled.h3`
  display: flex;
  justify-content: center;
  color: var(--emerald-400);
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-size: 14rem;
  font-weight: 500;

  input {
    font-weight: 500;
    padding: 8px;
    color: var(--zinc-950);

    &:focus {
      outline: var(--emerald-400) solid 2px;
    }
  }
`;

export const Button = styled.button<IButtonProps>`
  text-align: center;
  font-weight: 600;
  width: 48%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: ${({danger}) => (danger ? 'var(--zinc-950)' : 'auto')};
  background-color: ${({danger}) => (danger ? 'var(--red-500)' : 'auto')};

  &:hover {
    background-color: ${({danger}) => (danger ? 'var(--red-400)' : 'auto')};
  }

  &:active {
    background-color: ${({danger}) => (danger ? 'var(--red-600)' : 'auto')};
  }

  &:disabled {
    transform: none;
    color: ${({danger}) => (danger ? 'var(--red-100)' : 'auto')};
    background-color: ${({danger}) => (danger ? 'var(--red-800)' : 'auto')};
  }
`;