import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../models/chat-message.model';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  isOwnMessage = false;
  constructor(private authService: AuthService) {
    authService.authUser().subscribe(user => {
      this.isOwnMessage = user.email === this.chatMessage.email;
    });
  }

  ngOnInit() {}
}
