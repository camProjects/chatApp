import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', fromAuth.reducers, {
      metaReducers: fromAuth.metaReducers
    }),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, SignupComponent, AuthComponent]
})
export class AuthModule {}
