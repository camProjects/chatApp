import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  isOwnMessage = false;

  ngOnInit() {}
}
