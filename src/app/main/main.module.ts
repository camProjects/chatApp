import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature('main', fromMain.reducers, { metaReducers: fromMain.metaReducers })
  ],
  declarations: []
})
export class MainModule { }
