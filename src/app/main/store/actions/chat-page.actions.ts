import { Action } from '@ngrx/store';

export enum ChatPageActionTypes {
  GET_CHANNELS = '[ChatPage] Get Channels',
  GET_CHANNELS_SUCCESS = '[ChatPage] Get Channels success',

  ADD_CHANNEL = '[ChatPage] Add Channel',
  ADD_CHANNEL_SUCCESS = '[ChatPage] Add Channel success'
}

export class GetChannels implements Action {
  readonly type = ChatPageActionTypes.GET_CHANNELS;
}

export class GetChannelsSuccess implements Action {
  readonly type = ChatPageActionTypes.GET_CHANNELS_SUCCESS;
  constructor(public payload: any) {}
}

export class AddChannel implements Action {
  readonly type = ChatPageActionTypes.ADD_CHANNEL;
  constructor(public payload: string) {}
}

export class AddChannelSuccess implements Action {
  readonly type = ChatPageActionTypes.ADD_CHANNEL_SUCCESS;
}

export type ChatPageActions =
  | GetChannels
  | GetChannelsSuccess
  | AddChannel
  | AddChannelSuccess;
