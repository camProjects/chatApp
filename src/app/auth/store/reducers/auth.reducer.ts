import { Action } from '@ngrx/store';

export interface State {
  isAuthorized: boolean;
}

export const initialState: State = {
  isAuthorized: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
