import { Action } from '@ngrx/store';
import { ChatMessage } from '../../models';

export enum ChatPageActionTypes {
  GET_CHANNELS = '[ChatPage] Get Channels',
  GET_CHANNELS_SUCCESS = '[ChatPage] Get Channels success',

  GET_CHAT_MESSAGES = '[ChatPage] Get Chat Messages',
  GET_CHAT_MESSAGES_SUCCESS = '[ChatPage] Get Chat Messages success',

  ADD_CHANNEL = '[ChatPage] Add Channel',
  ADD_CHANNEL_SUCCESS = '[ChatPage] Add Channel success',

  SEND_MESSAGE = '[ChatPage] Send Message',
  SEND_MESSAGE_SUCCESS = '[ChatPage] Send Message success'
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

export class GetChatMessages implements Action {
  readonly type = ChatPageActionTypes.GET_CHAT_MESSAGES;
}

export class GetChatMessagesSuccess implements Action {
  readonly type = ChatPageActionTypes.GET_CHAT_MESSAGES_SUCCESS;
  constructor(public payload: ChatMessage[]) {}
}

export class SendMessage implements Action {
  readonly type = ChatPageActionTypes.SEND_MESSAGE;
  constructor(public payload: string) {}
}

export class SendMessageSuccess implements Action {
  readonly type = ChatPageActionTypes.SEND_MESSAGE_SUCCESS;
}

export type ChatPageActions =
  | GetChannels
  | GetChannelsSuccess
  | AddChannel
  | AddChannelSuccess
  | GetChatMessages
  | GetChatMessagesSuccess
  | SendMessage
  | SendMessageSuccess;
