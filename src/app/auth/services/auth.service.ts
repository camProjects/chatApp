import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<any | null>;

  constructor(
    private afAuth: AngularFireAuth // private db: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
  }

  authUser() {
    return this.user;
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        return credential.user; // if using firestore
      })
      .catch(error => console.log(error));
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
    this.afAuth.auth.signOut();
  }

  // setUserData(email: string, displayName: string, status: string) {
  //   const currentUserId = this.getCurrentUserId();
  //   const path = `users/${currentUserId}`;
  //   const data = {
  //     email,
  //     displayName,
  //     status
  //   };

  //   this.db
  //     .object(path)
  //     .update(data)
  //     .catch(err => console.log(err));
  // }

  // setUserStatus(status: string) {
  //   const path = `users/${this.getCurrentUserId()}`;
  //   const data = {
  //     status
  //   };

  //   this.db
  //     .object(path)
  //     .update(data)
  //     .catch(err => console.log(err));
  // }
}
