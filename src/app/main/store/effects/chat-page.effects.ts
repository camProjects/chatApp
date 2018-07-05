import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ChatPageActions from '../actions';
import * as fromMain from '../../store';
import * as fromApp from '../../../store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class ChatPageEffects {
  constructor(
    private actions$: Actions,
    private chatService: ChatService,
    private store: Store<fromMain.State>
  ) {}

  @Effect()
  getChannels$ = this.actions$
    .ofType(ChatPageActions.ChatPageActionTypes.GET_CHANNELS)
    .pipe(
      switchMap(() =>
        this.chatService
          .getChannelsObservable()
          .pipe(map(res => new ChatPageActions.GetChannelsSuccess(res)))
      )
    );

  @Effect()
  addChannel$ = this.actions$
    .ofType(ChatPageActions.ChatPageActionTypes.ADD_CHANNEL)
    .pipe(
      map((action: ChatPageActions.AddChannel) => action.payload),
      switchMap((name: string) =>
        from(this.chatService.addChannel(name)).pipe(
          map(() => new ChatPageActions.AddChannelSuccess())
        )
      )
    );

  @Effect()
  getMessages$ = this.actions$
    .ofType(ChatPageActions.ChatPageActionTypes.GET_CHAT_MESSAGES)
    .pipe(
      withLatestFrom(this.store.select(fromApp.getRouterState)),
      switchMap(att => {
        return from(
          this.chatService.getMessages(att[1].state.params.id).valueChanges()
        ).pipe(map(res => new ChatPageActions.GetChatMessagesSuccess(res)));
      })
    );

  @Effect()
  sendMessage$ = this.actions$
    .ofType(ChatPageActions.ChatPageActionTypes.SEND_MESSAGE)
    .pipe(
      map((action: ChatPageActions.SendMessage) => action.payload),
      withLatestFrom(this.store.select(fromApp.getRouterState)),
      switchMap(([mes, params]) => {
        return from(
          this.chatService.sendMessage(mes, params.state.params.id)
        ).pipe(map(() => new ChatPageActions.SendMessageSuccess()));
      })
    );
}
