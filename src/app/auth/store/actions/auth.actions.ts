import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
  DO_LOGIN = '[Auth] Do Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  DO_LOGOUT = '[Auth] Do Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success'
}

export class DoLogin implements Action {
  readonly type = AuthActionTypes.DO_LOGIN;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
}

export class DoLogout implements Action {
  readonly type = AuthActionTypes.DO_LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export type AuthActions =
  | DoLogin
  | LoginSuccess
  | LoginFailure
  | DoLogout
  | LogoutSuccess;
