import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { Store } from '@ngrx/store';

import * as fromMain from '../store';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, AfterViewChecked {
  feed$: Observable<ChatMessage[]>;
  isListOpen = false;
  @ViewChild('scroller') private feedContainer: ElementRef;
  constructor(private store: Store<fromMain.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromMain.GetChatMessages());
    this.feed$ = this.store.select(fromMain.getMessages);
  }

  sendMessage(mes: string) {
    this.store.dispatch(new fromMain.SendMessage(mes));
  }
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
