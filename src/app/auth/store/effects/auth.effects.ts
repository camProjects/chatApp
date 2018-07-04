import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from '../actions/auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of, from } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  doLogin$ = this.actions$.ofType(AuthActions.AuthActionTypes.DO_LOGIN).pipe(
    map((action: AuthActions.DoLogin) => action.payload),
    switchMap(cred => {
      return from(this.authService.login(cred.username, cred.password)).pipe(
        map(res => {
          this.router.navigate(['/']);
          return new AuthActions.LoginSuccess(res);
        }),
        catchError(() => of(new AuthActions.LoginFailure()))
      );
    })
  );
}
