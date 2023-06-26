import styled from 'styled-components';

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
  background: var(--third-dark);
  width: 480px;
  border-radius: 8px;
  padding: 32px;

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
  color: var(--sec-green);
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
    color: var(--main-dark);

    &:focus {
      outline: var(--sec-green) solid 2px;
    }
  }
`;

export const Button = styled.button`
  text-align: center;
  font-weight: 600;
  width: 48%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({color}) => (color && color == 'danger' ? 'var(--main-red)' : 'var(--sec-green)')};
  color: ${({color}) => (color && color == 'danger' ? 'var(--main-white)' : 'var(--main-dark)')};

  &:hover {
    transform: scale(1.05)
  }

  &:active {
    transform: scale(0.98)
  }

  &:disabled {
    color: var(--third-dark);
    background: var(--third-green);
    transform: none;
  }
`;