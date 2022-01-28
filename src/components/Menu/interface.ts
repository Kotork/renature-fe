export interface IProps {
  //isOpen: boolean;
}

export interface IStateMenu{
  menu: {
    isOpen: boolean;
    handleClick?: () => void;
  }
}

export interface IStateAuthUser{
  auth: {
    user: {
      email: string,
      password: string
    }
  }
}