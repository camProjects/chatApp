import { Component, OnInit } from '@angular/core';
import * as fromAuth from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}
  email: string;
  password: string;
  ngOnInit() {}

  onLogin(form) {
    this.store.dispatch(
      new fromAuth.DoLogin({
        username: form.value.email,
        password: form.value.password
      })
    );
  }
}
