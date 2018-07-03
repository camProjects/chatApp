import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  getCurrentUserId(): string {
    return (this.authState !== null && this.authState.user.uid) || '';
  }

  authUser() {
    return this.user;
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        const status = 'online';
        this.setUserStatus(status);
        this.router.navigate(['']);
      });
  }
  signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, displayName, status);
      })
      .catch(err => console.log(err));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['auth/login']);
  }

  setUserData(email: string, displayName: string, status: string) {
    const currentUserId = this.getCurrentUserId();
    const path = `users/${currentUserId}`;
    const data = {
      email,
      displayName,
      status
    };

    this.db
      .object(path)
      .update(data)
      .catch(err => console.log(err));
  }

  setUserStatus(status: string) {
    const path = `users/${this.getCurrentUserId()}`;
    const data = {
      status
    };

    this.db
      .object(path)
      .update(data)
      .catch(err => console.log(err));
  }
}
