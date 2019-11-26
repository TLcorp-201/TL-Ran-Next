import { LoadingAction, LoadingTypes } from './types';

const fetchShow = (namespace: string, actionType: string): LoadingAction => ({
  type: LoadingTypes.SHOW,
  payload: {
    namespace,
    actionType,
  },
});

const fetchHide = (namespace: string, actionType: string) => ({
  type: LoadingTypes.HIDE,
  payload: {
    namespace,
    actionType,
  },
});

export { fetchHide, fetchShow };
