import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: string;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
      this.getUser().subscribe(a => {
        this.userName = a.displayName;
      });
    });
  }

  getUser(): Observable<any> {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path).valueChanges();
  }

  sendMessage(msg: string, id: string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    const userName = this.userName;
    this.chatMessages = this.getMessages(id);
    return this.chatMessages
      .push({
        email: email,
        message: msg,
        userName: userName,
        timeSent: timeStamp
      })
      .then(() => {});
  }

  getMessages(id: string): AngularFireList<ChatMessage> {
    return this.db.list(`messages/${id}`, ref => ref.orderByKey());
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      '/' +
      (now.getUTCMonth() + 1) +
      '/' +
      now.getUTCDate();
    const time =
      now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return date + ' ' + time;
  }

  getChannelsObservable(): Observable<any[]> {
    return this.db
      .list('chatChannels', ref => ref.orderByKey())
      .snapshotChanges()
      .pipe(
        map(data => data.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      );
  }

  getChannels() {
    return this.db.list('chatChannels', ref => ref.orderByKey());
  }

  addChannel(name: string) {
    console.log(this.getChannels());
    return this.getChannels()
      .push({ name })
      .then(res => res);
  }
}
