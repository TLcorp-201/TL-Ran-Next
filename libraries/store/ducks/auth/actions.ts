import persist from '@/libraries/persist';

import { AuthActionTypes } from './types';

const updateMe = ({ data = {} } = {}) => ({
  type: AuthActionTypes.UPDATE_ME,
  payload: data,
});

const signIn = (token: string, refreshToken: string) => {
  persist.willSetAccessToken(token);
  return {
    type: AuthActionTypes.AUTH_SIGNIN,
    payload: {
      token,
      refreshToken,
    },
  };
};

const signOut = () => {
  persist.willRemoveAccessToken();
  return {
    type: AuthActionTypes.AUTH_SIGNOUT,
  };
};

export { updateMe, signIn, signOut };
