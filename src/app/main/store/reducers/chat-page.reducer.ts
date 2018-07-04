import { Action } from '@ngrx/store';

import * as ChatPageActions from '../actions';
import { ChatChannel } from '../../models/chat-channel';

export interface State {
  chatChannels: ChatChannel[];
}

export const initialState: State = {
  chatChannels: []
};

export function reducer(
  state = initialState,
  action: ChatPageActions.ChatPageActions
): State {
  switch (action.type) {
    case ChatPageActions.ChatPageActionTypes.GET_CHANNELS_SUCCESS:
      return { ...state, chatChannels: action.payload };
    default:
      return state;
  }
}
