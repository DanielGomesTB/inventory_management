import styled from 'styled-components';

interface ILabelProps {
  width?: number;
}

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--main-white);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--main-green);

  .forms{
    display: flex;
    justify-content: space-between;
  }

  .main-form {
    display: flex;
    width: 100%;
  }
 
`;

export const InnerContainer = styled.div`
  background: var(--third-green);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;

  .inputs {
    display: flex;
  }
`;

export const SelectLabel = styled.label<ILabelProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({width}) => (width ? `${width}%` : 'auto')};
  font-size: 14rem;
  font-weight: 500;

  select {
    font-weight: 500;
    padding: 8px;
    color: var(--main-dark);

    &:focus {
      outline: var(--third-dark) solid 2px;
    }
  }
`;

export const Button = styled.button`
  color: var(--main-dark);
  text-align: center;
  font-weight: 600;
  width: 160px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: var(--sec-green);

  &:hover {
    color: var(--main-dark);
    background: var(--third-green);
  }

  &:active {
    transform: scale(0.95)
  }

  &:disabled {
    color: var(--third-dark);
    background: var(--third-green);
    transform: none;
  }
`;