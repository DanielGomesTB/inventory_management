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
  background: var(--zinc-800);
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