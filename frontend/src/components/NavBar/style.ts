import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  top: 0;
  left: 0;
  min-width: 200px;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  background: var(--zinc-900);

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    color: var(--zinc-50);
    text-align: left;
    font-weight: 500;
    width: 100%;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: var(--zinc-800);

    &:hover {
      /* background: var(--zinc-950); */
      box-shadow: var(--normal-shadow);
      transform: translateX(1px);
    }
  }
`;
