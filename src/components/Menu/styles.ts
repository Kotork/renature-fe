import styled from 'styled-components';

// SVG
/* @ts-ignore */
import { ReactComponent as Icon } from '../../assets/svg/menu.svg';

// INTERFACES
import { IStateMenu } from "./interface";

export const Container = styled.div`
  z-index: 10;
`;

export const StyledIcon = styled(Icon)<IStateMenu>`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 24px;
  height: 24px;
  fill: ${ props => props.menu.isOpen ? '#000' : '#fff' };
  cursor: pointer;
  z-index: 11;
`;

export const OpenedMenu = styled.div`
  position: absolute;
  height: 100%;
  min-width: 400px;
  width: 33.5%;
  max-width: 1000px;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  a:first-child {
    text-align: center;
    margin-top: 4rem;
  }
`

export const MenuNav = styled.div`
  margin-top: 8rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #000;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    opacity: .8;
  }
`