import styled from 'styled-components';

export const Season = styled.div`
  grid-area: serie;
  background-color: var(--blue);
  padding: 4rem 8rem;

  display: flex;
  justify-content: flex-start;
`

export const Preview = styled.div`
  background-image: url('../images/series.jpg');
  background-size: cover;
  filter: brightness(60%);
  width: 30rem;
  height: 50rem;
  border-radius: 8px;
  position: relative;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 4rem;

  :hover {
    filter: none;
    cursor: pointer;

    h2, h3 {
      display: block;
    }
  }
`

export const Title = styled.h2`
  display: none;
  color: white;
  text-transform: uppercase;
  font-size: var(--header1);
`

export const Episode = styled.h3`
  display: none;
  color: white;
  font-size: var(--header2);
  opacity: .9;

`