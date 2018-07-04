import { Component, OnInit } from '@angular/core';
import * as fromAuth from '../auth/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  logout() {
    this.store.dispatch(new fromAuth.DoLogout());
  }
}
