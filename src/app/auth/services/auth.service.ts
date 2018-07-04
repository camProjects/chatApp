import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: firebase.User = null;
  private count = 0;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    afAuth.authState.subscribe(auth => (this.authState = auth));
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => error);
  }
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        return credential.user; // if using firestore
      })
      .catch(error => console.log(error));
  }
  logout() {
    return this.afAuth.auth
      .signOut()
      .then(() => {})
      .catch(error => error);
  }

  updateUserData(data: any): User {
    const user: User = {
      uid: data.uid,
      email: data.email || null,
      displayName: data.displayName || 'nameless user',
      photoURL: data.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return user;
  }
}
