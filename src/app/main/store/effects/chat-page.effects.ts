import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ChatPageActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';
import { from } from 'rxjs';

@Injectable()
export class ChatPageEffects {
  constructor(private actions$: Actions, private chatService: ChatService) {}

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
}
