import * as AuthActions from '../actions/auth.actions';

export interface State {
  isAuthorized: boolean;
  logging: boolean;
  user: any;
}

export const initialState: State = {
  isAuthorized: false,
  logging: false,
  user: null
};

export function reducer(
  state = initialState,
  action: AuthActions.AuthActions
): State {
  switch (action.type) {
    case AuthActions.AuthActionTypes.DO_LOGIN:
      return { ...state, logging: true };
    case AuthActions.AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
