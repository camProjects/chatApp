import { Action } from '@ngrx/store';

import * as ChatPageActions from '../actions';
import { Channel, ChatMessage } from '../../models';

export interface State {
  chatChannels: Channel[];
  messages: ChatMessage[];
}

export const initialState: State = {
  chatChannels: [],
  messages: null
};

export function reducer(
  state = initialState,
  action: ChatPageActions.ChatPageActions
): State {
  switch (action.type) {
    case ChatPageActions.ChatPageActionTypes.GET_CHANNELS_SUCCESS:
      return { ...state, chatChannels: action.payload };
    case ChatPageActions.ChatPageActionTypes.GET_CHAT_MESSAGES:
      return { ...state, messages: null };
    case ChatPageActions.ChatPageActionTypes.GET_CHAT_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
