import { Component, OnInit } from '@angular/core';
import * as fromMain from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Channel } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<Channel[]>;
  name: string;
  constructor(private store: Store<fromMain.State>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new fromMain.GetChannels());
    this.initValues();
  }

  initValues() {
    this.channels$ = this.store.select(fromMain.getChannels);
  }

  addChanel() {
    this.store.dispatch(new fromMain.AddChannel(this.name));
  }

  navigateToRoom(channel: Channel) {
    this.router.navigate(['channels', channel.key]);
  }
}
