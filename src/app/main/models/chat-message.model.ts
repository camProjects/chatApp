export class ChatMessage {
  key?: string;
  email?: string;
  userName?: string;
  message?: string;
  timeSent?: string;
}

export interface ChatMessages {
  id: string;
  messages: ChatMessage[];
}
