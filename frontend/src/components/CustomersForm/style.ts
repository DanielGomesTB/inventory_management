import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 16px;
  border-radius: 8px;
  background: var(--sec-dark);

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.h3`
  color: var(--sec-green)
`;
