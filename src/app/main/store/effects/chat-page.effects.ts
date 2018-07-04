import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as ChatPageActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';

@Injectable()
export class ChatPageEffects {
  constructor(private actions$: Actions, private chatService: ChatService) {}

  @Effect()
  getChannels$ = this.actions$
    .ofType(ChatPageActions.ChatPageActionTypes.GET_CHANNELS)
    .pipe(
      switchMap(() =>
        this.chatService
          .getChannels()
          .pipe(map(res => new ChatPageActions.GetChannelsSuccess(res)))
      )
    );
}
