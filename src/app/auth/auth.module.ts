import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { effects, reducers, metaReducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers, {
      metaReducers: metaReducers
    }),
    EffectsModule.forFeature(effects)
  ],
  declarations: [LoginComponent, SignupComponent, AuthComponent]
})
export class AuthModule {}
