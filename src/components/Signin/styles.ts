import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin-top: 2rem;
    font-size: 1.2rem;

    span {
      cursor: pointer;
      color: var(--blue);
      text-decoration: underline;

      :hover {
        font-weight: bold;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-top: 4rem;

  h1 {
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 1rem;
    font-size: 1.4rem;

    * {
      font-size: 1.4rem;
    }
  }

  button {
    text-transform: uppercase;
    font-size: 1.6rem;
  }
`