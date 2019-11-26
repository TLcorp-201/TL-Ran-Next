import cookies from 'js-cookie';

export default class Persist {
  static get ACCESS_TOKEN_KEY(): string {
    return 'accessToken';
  }

  static async willGetAccessToken() {
    return cookies.get(Persist.ACCESS_TOKEN_KEY);
  }

  static async willSetAccessToken(value: string) {
    return cookies.set(Persist.ACCESS_TOKEN_KEY, value);
  }

  static async willRemoveAccessToken() {
    return cookies.remove(Persist.ACCESS_TOKEN_KEY);
  }
}
