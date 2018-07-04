import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  DO_LOGIN = '[Auth] Do Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure'
}

export class DoLogin implements Action {
  readonly type = AuthActionTypes.DO_LOGIN;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
}

export type AuthActions = DoLogin | LoginSuccess | LoginFailure;
