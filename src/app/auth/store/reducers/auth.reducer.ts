import * as AuthActions from '../actions/auth.actions';
import { User } from '../../models/user.model';

export interface State {
  isAuthorized: boolean;
  logging: boolean;
  user: User;
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
    case AuthActions.AuthActionTypes.LOGOUT_SUCCESS:
      return { ...state, user: null };
    default:
      return state;
  }
}
