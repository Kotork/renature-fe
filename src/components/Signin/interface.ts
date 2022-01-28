export interface IProps {
  isSignin: boolean,
  setIsSignin: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IForm {
  email: string,
  password: string
}