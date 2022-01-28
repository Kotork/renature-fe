import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr .4fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'header volunteer'
  ;

  background-color: var(--blue);
`

export const Header = styled.div`
  grid-area: header;
  padding: 10rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }

  p {
    color: white;
  }

  .MuiFormControl-root {
    background-color: var(--green);
    border-radius: 5px;

    .MuiFilledInput-root {
      font-size: 1.6rem;
      color: white;
    }
  }
`