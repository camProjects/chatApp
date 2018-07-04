import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromChatPage from './chat-page.reducer';

export interface State {
  chatPage: fromChatPage.State;
}

export const reducers: ActionReducerMap<State> = {
  chatPage: fromChatPage.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectMainState = createFeatureSelector<State>('main');
