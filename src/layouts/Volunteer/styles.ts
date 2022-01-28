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
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }
`

export const Volunteer = styled.div`
  background-image: url('../images/project.png');
  background-size: cover;
  margin-top: 4rem;
  width: 20rem;
  height: 20rem;
  border-radius: 8px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all .3s ease-in-out;

  span {
    color: white;
    text-transform: uppercase;
    font-size: var(--header2);
    margin-bottom: 2rem;
    display: none;
  }

  button {
    display: none;
  }

  :hover {

    span,
    button {
      display: block;
    }
  }
`