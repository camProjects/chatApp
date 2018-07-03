import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, AfterViewChecked {
  feed: Observable<ChatMessage[]>;
  isListOpen = false;
  @ViewChild('scroller') private feedContainer: ElementRef;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.feed = this.chatService.getMessages().valueChanges();
  }

  sendMessage(mes: string) {
    this.chatService.sendMessage(mes);
  }
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
