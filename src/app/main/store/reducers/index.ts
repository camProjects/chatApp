import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromChatPage from './chat-page.reducer';
import * as fromApp from '../../../store';

export interface FeatureState extends fromApp.State {
  mainState: State;
}

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
