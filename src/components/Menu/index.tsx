import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps, IStateMenu } from "./interface";

// COMPONENTS
import { Logo } from '../Logo'
import { Signin } from '../'

// STYLES
import { Container, OpenedMenu, StyledIcon } from "./styles";

export const Menu: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const menuState = useSelector((state: IStateMenu) => state.menu)

  const handleIconClick = () => menuState.isOpen ? dispatch(closeMenu()) : dispatch(openMenu());

  return (
    <Container>
      <StyledIcon menu={menuState} onClick={handleIconClick} />
      {menuState.isOpen && <OpenedMenu>
        <Logo type="horizontal" />
        <Signin />
      </OpenedMenu>}
    </Container>
  );
};