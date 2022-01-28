import styled from 'styled-components';

interface ILegend {
  color: string
}

export const Dot = styled.div<ILegend>`
  margin-top: 0 !important;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${ props => props.color};
`

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

  div {
    margin-top: 4rem;
  }
`

export const Images = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 30vh;
    width: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.6rem;

    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`

export const Legend = styled.span`
  margin-left: 2rem;
  color: ${ props => props.color}
`