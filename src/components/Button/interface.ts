export interface IButton {
  color?: string;
  text?: string;
  typeButton?: 'button' | 'submit';
  handleClick?: () => void;
}