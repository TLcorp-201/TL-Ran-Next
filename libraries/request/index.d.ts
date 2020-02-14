export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
export interface ReqOpt {
  query?: object;
  method?: Method;
  headers?: Headers;
  body?: FormData | Blob | ArrayBuffer | string | object;
}

export interface Resp<T = object | string | object[] | string[]> {
  success: boolean;
  code: number | string;
  data: T;
}
interface ErrorBodyDetailItem {
  code?: 'required' | 'type' | 'format';
  path?: string;
  message?: string;
}
export interface ErrorBody {
  name:
    | 'UnprocessableEntityError'
    | 'ValidationError'
    | 'CustomValidationError';
  details: ErrorBodyDetailItem[];
}

export interface ReqError extends Error {
  response?: Response;
  details?: object;
  name?: number | string;
  json: {
    error?: ErrorBody;
  };
}
