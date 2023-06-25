import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  padding: 16px;
  border-radius: 8px;
  background: var(--main-green);

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
  background: var(--third-green);

  label {
    display: flex;
    flex-direction: column;
  }
`;