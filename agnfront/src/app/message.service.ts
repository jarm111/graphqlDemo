import { Injectable } from '@angular/core';
import { Message, Query, Mutation } from './types';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { catchError, map, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private apollo: Apollo) { }


  // mutation query uuden viestin lähettämiseen
  createMessageMutation = gql`
  mutation createMessage($title: String, $user: String, $msg: String!) {
    createMessage(title: $title, user: $user, msg: $msg) {
      _id
      title
      user
      msg
    }}
  `;

  /** lähetä uusi viesti */
  addMsg(message: Message): Observable<Message> {
    return this.apollo.mutate({
      mutation: this.createMessageMutation,
      variables: {
        title: message.title,
        user: message.user,
        msg: message.msg
      }
    });
  }

  getMessages(): Observable<Message[]> {
    return this.apollo.query<Query>({
      query: gql`
        query {
          allMessages {
            _id
            title
            user
            msg
          }
        }
      `
    }).pipe(
      map(result => result.data.allMessages)
    );
  }

}
