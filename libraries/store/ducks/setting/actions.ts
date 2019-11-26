import { SettingActionTypes, SettingState } from './types';

const setSetting = (newSetting: Partial<SettingState>) => ({
  type: SettingActionTypes.SET_SETTING,
  payload: newSetting,
});

export { setSetting };
