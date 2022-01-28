export interface IProps {
  isSignin: boolean,
  setIsSignin: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IForm {
  name: string;
  lastName: string;
  email: string,
  password: string
}