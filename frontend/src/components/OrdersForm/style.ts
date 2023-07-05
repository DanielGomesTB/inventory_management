import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 16px;
  border-radius: 8px;
  background: var(--emerald-900);

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const InnerContainer = styled.section`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: var(--emerald-300);

  label {
    display: flex;
    flex-direction: column;
  }
`;