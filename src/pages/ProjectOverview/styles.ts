import styled from 'styled-components';

export const Info = styled.div`
  grid-area: info;
  background-color: white;
  padding: 4rem;

  h2 {
    font-size: var(--header2);
    text-transform: uppercase;
    color: var(--green);
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    margin-top: 2rem;
  }
`