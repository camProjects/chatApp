import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './store/reducers';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature('main', fromMain.reducers, { metaReducers: fromMain.metaReducers })
  ],
  declarations: [ChatPageComponent]
})
export class MainModule { }
