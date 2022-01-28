import styled from 'styled-components';

export const Volunteer = styled.div`
  grid-area: volunteer;
  background-color: white;
  padding: 4rem 8rem;

  h2 {
    font-size: var(--header1);
    margin-bottom: 4rem;
  }

  h3 {
    font-size: var(--header2);
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }

  button {
    margin-top: 8rem;
    font-size: 1.6rem;
  }
`