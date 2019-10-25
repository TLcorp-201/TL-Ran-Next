import path from 'ramda/src/path';
import { LoadingAction, LoadingState, LoadingTypes } from './types';

const initState = {
  global: false,
  models: {},
  effects: {},
};

const reducer = (state = initState, action: LoadingAction): LoadingState => {
  if (!path(['payload', 'namspace'], action)) {
    return state;
  }
  const { namespace, actionType } = action.payload;
  switch (action.type) {
    case LoadingTypes.SHOW: {
      return {
        ...state,
        global: true,
        models: { ...state.models, [namespace]: true },
        effects: { ...state.effects, [actionType]: true },
      };
    }
    case LoadingTypes.HIDE: {
      const effects = { ...state.effects, [actionType]: false };
      const models = {
        ...state.models,
        [namespace]: Object.keys(effects).some(aT => {
          const ns = aT.split('/')[0];
          if (ns !== namespace) return false;
          return effects[actionType];
        }),
      };
      const global = Object.keys(models).some(ns => models[ns]);
      const ret = {
        ...state,
        global,
        models,
        effects,
      };
      return ret;
    }
    default:
      return state;
  }
};

export default reducer;
