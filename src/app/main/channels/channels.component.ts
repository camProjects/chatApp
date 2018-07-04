import { Component, OnInit } from '@angular/core';
import * as fromMain from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Channel } from '../models';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<Channel[]>;
  name: string;
  constructor(private store: Store<fromMain.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromMain.GetChannels());
  }

  initValues() {
    this.channels$ = this.store.select(fromMain.getChannels);
  }

  addChanel() {}
}
