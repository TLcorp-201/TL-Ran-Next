import { AuthActionTypes, AuthState } from './types';

const initialState: AuthState = {
  authenticated: false,
  me: null,
  permissions: [],
  refreshToken: null,
  token: null,
  error: null,
};

export default (state = initialState, { type, payload }: Action): AuthState => {
  switch (type) {
    case AuthActionTypes.UPDATE_ME:
      return {
        ...state,
        me: payload,
      };

    case AuthActionTypes.REMOVE_ME:
      return {
        ...state,
        me: null,
      };

    case AuthActionTypes.SAVE_PERMISSION:
      return {
        ...state,
        permissions: payload.permissions,
      };

    case AuthActionTypes.AUTH_SIGNIN:
      return {
        ...state,
        authenticated: true,
        token: payload.token,
        refreshToken: payload.refreshToken,
        error: null,
      };
    case AuthActionTypes.AUTH_SIGNOUT:
      return {
        ...state,
        authenticated: false,
        me: null,
        permissions: [],
        token: null,
        refreshToken: null,
        error: null,
      };
    case AuthActionTypes.AUTH_SERVERERROR:
      return {
        ...state,
        authenticated: false,
        me: null,
        permissions: [],
        error: payload.error,
      };
    default:
      return state;
  }
};
