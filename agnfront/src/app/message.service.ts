import { Injectable } from '@angular/core';
import { Message, Query, Mutation } from './types';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private apollo: Apollo) { }


  // mutation query uuden viestin lähettämiseen
  createMessageMutation = gql`
  mutation createMessage($msg: String!) {
    createMessage(msg: $msg) {
      _id
      msg
    }}
  `;

  /** lähetä uusi viesti */
  addMsg(message: Message): Observable<Message> {
    return this.apollo.mutate({
      mutation: this.createMessageMutation,
      variables: {
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
            msg
          }
        }
      `
    }).pipe(
      map(result => result.data.allMessages)
    );
  }

}
