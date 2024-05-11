export interface InputType {
  labelName?: string;
  type: string;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
  isImage?: boolean;
  command?: boolean;
}

export interface ButtonType {
  buttonType?: "submit" | "reset" | "button" | undefined;
  buttonName: string;
  loading?: boolean;
}

export interface User {
  uid: string;
  email: string;
  token: string;
  userType?: string;
  studentId: string;
  userName?: string;
  tokenExpiration: 0;
}

export interface RegisterInput {
  userName: string;
  email: string;
  password: string;
  studentId: string;
}
export interface LoginInput {
  email: string;
  password: string;
}
