import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: .5fr 1fr;
  grid-template-areas:
    'header'
    'serie'
  ;

  background-color: var(--blue);
`

export const Header = styled.div`
  grid-area: header;
  padding: 10rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }
`

