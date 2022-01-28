import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTIONS
import { openMenu, closeMenu } from "../../store/actions";

// INTERFACES
import { IProps, IStateMenu, IStateAuthUser } from "./interface";

// COMPONENTS
import { Logo } from '../Logo'
import { Signin } from '../'

// STYLES
import { Container, OpenedMenu, MenuNav, StyledIcon } from "./styles";

export const Menu: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const [isSignin, setIsSignin] = useState(true)

  const authUser = useSelector((state: IStateAuthUser) => state.auth.user)
  const menuState = useSelector((state: IStateMenu) => state.menu)

  const handleIconClick = () => menuState.isOpen ? dispatch(closeMenu()) : dispatch(openMenu());

  return (
    <Container>
      <StyledIcon menu={menuState} onClick={handleIconClick} />
      {menuState.isOpen && <OpenedMenu>
        <a href="/">
          <Logo type="horizontal" />
        </a>
        {!authUser && <Signin setIsSignin={setIsSignin} isSignin={isSignin} />}

        <MenuNav>
          <a href="/project/location">O Projeto</a>
          <a href="/series">A Série</a>
          <a href="/volunteer">Voluntaria-te</a>
        </MenuNav>
      </OpenedMenu>}
    </Container>
  );
};