declare interface IStore {
  auth: IAuthStore;
  console: IConsoleStore;
}

declare interface ResponseAuthData {
  login: string;
  sublogin: string;
  sessionKey: string;
}

declare interface RequestAuthData {
  login: string;
  sublogin: string;
  password: string;
}

declare interface IAuthStore extends ResponseAuthData {
  loading: boolean;
  error: string;
}

declare interface IError {
  id: string;
  explain: string;
}

declare interface ResponseConsoleData {}

declare interface IConsoleStore extends ResponseConsoleData {
  loading: boolean;
  error: string;
}
