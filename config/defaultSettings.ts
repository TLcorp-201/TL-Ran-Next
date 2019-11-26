import { SettingState } from '@/libraries/store/ducks/setting/types';

export default {
  navTheme: 'dark',
  primaryColor: '#1890FF',
  fontFamily: '"Roboto", sans-serif',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'SUNSHINE INSIDE',
  pwa: false,
  iconfontUrl: '',
} as SettingState;
