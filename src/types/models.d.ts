declare interface IAuthFormValues {
  login: string;
  sublogin: string;
  password: string;
}

declare interface IUser {
  login: string;
  sublogin: string | null;
}

declare type THoverColor = 'blue' | 'red';
