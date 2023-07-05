import styled from 'styled-components';

interface ILabelProps {
  width?: number;
}

export const StyledLabel = styled.label<ILabelProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({width}) => (width ? `${width}%` : 'auto')};
  font-size: 14rem;
  font-weight: 500;

  input {
    font-weight: 500;
    padding: 8px;
    color: var(--zinc-950);
    
    &:focus {
      outline: var(--zinc-800) solid 2px;
    }
  }

  input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`;
