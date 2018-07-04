import * as fromMain from '../reducers';
import * as fromChatPage from '../reducers/chat-page.reducer';
import { createSelector } from '@ngrx/store';

export const selectChatPageState = createSelector(
  fromMain.selectMainState,
  (state: fromMain.State) => state.chatPage
);

export const getChannels = createSelector(
  selectChatPageState,
  (state: fromChatPage.State) => state.chatChannels
);
