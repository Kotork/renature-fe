import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: .8fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left info';

  @media only screen and (max-width: 978px) {
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 1fr;
    grid-template-areas:
      'left'
      'info';
  }
`

export const Left = styled.div`
  grid-area: left;
  background-color: red;
  padding: 10rem 4rem;
`

export const Header1 = styled.h1`
  text-transform: uppercase;

`
export const Header2 = styled.h2`
  text-transform: uppercase;
  text-align: right;
  color: #
`