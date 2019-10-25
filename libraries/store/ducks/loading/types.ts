export enum LoadingTypes {
  SHOW = 'beereading/loading/show',
  HIDE = 'beereading/loading/hide',
}

export interface ActionInfo {
  namespace: string;
  actionType: string;
}

export interface LoadingAction {
  type: LoadingTypes;
  payload: ActionInfo;
}

export interface LoadingState {
  global: boolean;
  models: {
    [key: string]: boolean;
  };
  effects: {
    [key: string]: boolean;
  };
}
