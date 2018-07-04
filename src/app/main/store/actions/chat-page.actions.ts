import { Action } from '@ngrx/store';

export enum ChatPageActionTypes {
  GET_CHANNELS = '[ChatPage] Get Channels',
  GET_CHANNELS_SUCCESS = '[ChatPage] Get Channels success'
}

export class GetChannels implements Action {
  readonly type = ChatPageActionTypes.GET_CHANNELS;
}

export class GetChannelsSuccess implements Action {
  readonly type = ChatPageActionTypes.GET_CHANNELS_SUCCESS;
  constructor(public payload: any) {}
}

export type ChatPageActions = GetChannels | GetChannelsSuccess;
