import {
  SettingActionTypes,
  SettingState,
} from '@/libraries/store/ducks/setting/types';
import defaultSettings from '@/config/defaultSettings';

const settingReducer = (
  state = defaultSettings,
  { type, payload }: { payload?: Partial<SettingState> } & Action,
): SettingState => {
  switch (type) {
    case SettingActionTypes.SET_SETTING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default settingReducer;
