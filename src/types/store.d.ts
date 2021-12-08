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

type Status = 'success' | 'failed';

declare interface IRequest {
  action: string;
}

declare interface ResponseConsoleData {
  request: IRequest | string;
  response: string;
  status?: Status;
}

declare interface IHistory extends ResponseConsoleData {
  id?: number;
}

declare interface IConsoleStore extends ResponseConsoleData {
  loading: boolean;
  history: IHistory[];
  hasError: boolean;
}

declare type RequestConsoleData = Pick<ResponseConsoleData, 'request'>;
