import { compose } from 'redux';

export interface ApplicationState {
  [key: string]: any;
}

export type Namespace = string;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  namespace NodeJS {
    interface Process {
      browser: boolean;
    }
  }
}

export interface HeadersType {
  accept: string;
  'accpet-encoding': string;
  'accept-language': string;
  'cache-control': string;
  connection: string;
  cookie: string;
  host: string;
  pragma: string;
  referer: string;
  'upgrade-insecure-requests': string;
  'user-agent': string;
}
