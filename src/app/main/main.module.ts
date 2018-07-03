import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './store/reducers';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './chat-page/feed/feed.component';
import { ChatFormComponent } from './chat-page/chat-form/chat-form.component';
import { ChatRoomsComponent } from './chat-page/chat-rooms/chat-rooms.component';
import { MessageComponent } from './chat-page/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature('main', fromMain.reducers, { metaReducers: fromMain.metaReducers })
  ],
  declarations: [ChatPageComponent, MainComponent, HeaderComponent, FeedComponent, ChatFormComponent, ChatRoomsComponent, MessageComponent]
})
export class MainModule { }
