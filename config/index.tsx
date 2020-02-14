export const API_URL = (() => {
  console.log('process env ', process.env.APP__API_URL);
  if (!process.browser) {
    return process.env.APP__API_URL || 'http://api-p7.agiletech.vn:3000';
  }

  if (window.localStorage.getItem('__APIURL__')) {
    return window.localStorage.getItem('__APIURL__');
  }

  return process.env.APP__API_URL || 'http://api-p7.agiletech.vn:3000';
})();

export const COOKIE_READMORE_LINK = 'https://zmooz.com/blog/cookie';

export const EMPTY_OBJECT = {};

export const EMPTY_ARRAY = [];

export const STATUS_ACTIVE = 1;
export const DISPLAY_YES = 1;

export const DEBUG = true;

export const ANDROID_LINK =
  'https://play.google.com/store/apps/details?id=com.zmooz';
export const IOS_LINK =
  'https://apps.apple.com/ro/app/zmooz-stories/id1477003924';
