import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--zinc-900);

  .products {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--zinc-950);
    font-weight: 600;
    width: 160px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: var(--emerald-400);

    &:hover {
      color: var(--zinc-950);
      background: var(--emerald-300);
    }

    &:active {
      transform: scale(0.98)
    }

    &:disabled {
      color: var(--zinc-800);
      background: var(--emerald-300);
      transform: none;
    }
  }
`;

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--emerald-400);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  background-color: var(--zinc-800);
  border-radius: 8px;
  padding: 8px 16px;
  max-width: 260px;
  text-overflow: ellipsis;

  img{
    border-radius: 16px;
    width: 225px;
    height: 225px;
    max-width: 225px;
    max-height: 255px;
  }

  button {
    padding: 0;
    background-color: inherit;
    color: var(--zinc-50)
  }

  .card-header {
    font-size: 16rem;
    font-weight: 600;
  }

  .card-main {
    div {
      display: flex;
      justify-content: space-between;
    }

    span {
      font-size: 10rem;
      color: var(--third-white)
    }

    p {
      text-align: center;
      font-size: 20rem;
      font-weight: 600;
      color:var(--emerald-400)
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;


    .card-footer-controllers {
      display: flex;
      gap: 8px;

      svg {
        font-size: 20rem;
      }
    }

    .card-footer-editors {
      display: flex;
      gap: 8px;
    }
  }
`;