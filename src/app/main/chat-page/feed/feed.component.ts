import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feed: ChatMessage;
  constructor() {}

  ngOnInit() {}
}
