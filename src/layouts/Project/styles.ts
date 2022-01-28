import styled from 'styled-components';

import { ReactComponent as Location } from '../../assets/svg/location.svg'
import { ReactComponent as Leaf } from '../../assets/svg/leaf.svg'
import { ReactComponent as Tree } from '../../assets/svg/tree.svg'
import { ReactComponent as Euro } from '../../assets/svg/euro.svg'

interface IStateSVG {
  active: boolean;
}

export const IconLocation = styled(Location)<IStateSVG>`
  fill: ${ props => props.active ? '#106f2b' : '#fff' };
`

export const IconLeaf = styled(Leaf)<IStateSVG>`
  fill: ${ props => props.active ? '#106f2b' : '#fff' };
`
export const IconTree = styled(Tree)<IStateSVG>`
  fill: ${ props => props.active ? '#106f2b' : '#fff' };
`

export const IconEuro = styled(Euro)<IStateSVG>`
  fill: ${ props => props.active ? '#106f2b' : '#fff' };
`

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
  background-color: var(--blue);
  padding: 10rem 4rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }

  h2 {
    text-transform: uppercase;
    text-align: right;
    color: var(--green);
    font-size: var(--header2);
    font-weight: bold;
  }
`

export const Informations = styled.div`
  margin-top: 4rem;

  a {
    margin-right: 2rem;

    :hover {
      svg {
        fill: var(--green);
      }
    }
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: var(--header2);
  margin-bottom: 1.5rem;
`

export const About = styled.div`
  color: white;
  margin-top: 4rem;
`

export const Owners = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  img {
    width: 15rem;
    height: auto;
  }
`

export const Partners = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  img {
    width: 15rem;
    height: auto;
  }
`