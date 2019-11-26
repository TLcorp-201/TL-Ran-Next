enum AuthActionTypes {
  UPDATE_ME = 'beereading/auth/updateMe',
  REMOVE_ME = 'beereading/auth/updateMe',
  SAVE_PERMISSION = 'beereading/auth/savePerm',
  AUTH_SIGNIN = 'beereading/auth/signin',
  AUTH_SIGNOUT = 'beereading/auth/signout',
  AUTH_SERVERERROR = 'beereading/',
}

interface AuthState {
  me: object | null;
  permissions: any[];
  authenticated: boolean;
  error: Error | null;
  token: string | null;
  refreshToken: string | null;
}

export { AuthActionTypes, AuthState };
