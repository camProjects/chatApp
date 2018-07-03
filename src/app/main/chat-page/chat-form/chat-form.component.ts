import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  message: string;
  @Output() sending = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  send() {
    this.sending.emit(this.message);
    this.message = '';
  }

  handelSubmit(event: any) {
    if (event.keyCode === 13) {
      this.sending.emit(event.target.value);
      this.message = '';
    }
  }
}
