export interface IProps {
  //isOpen: boolean;
}

export interface IStateMenu{
  menu: {
    isOpen: boolean;
    handleClick?: () => void;
  }
}