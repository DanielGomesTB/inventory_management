import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--sec-dark);

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
    color: var(--main-dark);
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
      transform: scale(0.98)
    }

    &:disabled {
      color: var(--third-dark);
      background: var(--third-green);
      transform: none;
    }
  }
`;

export const Text = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--sec-green);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  background-color: var(--third-dark);
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
    border: none;
    background-color: inherit;
    color: var(--main-white)
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
      color:var(--sec-green)
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