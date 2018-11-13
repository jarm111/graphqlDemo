import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../types';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  add(msg: string): void {
    msg = msg.trim();
    if (!msg) { return; }
    this.messageService.addMsg({ msg } as Message)
      .subscribe(res => {
        console.log(res);
      //  this.refresh();
      });
  }

// Syistä johtuen ei toimi (halutulla tavalla) kuin sivun ensimmäisen latauksen yhteydessä,
// ei oleellinen GraphQL:n oppimiseen /ymmärtämiseen
  refresh() {
    this.messages = null;
    this.messageService.getMessages()
    .subscribe(res => {
      this.messages = res;
      console.log('sivu päivitetty');
      console.log(this.messages);
    });
  }
}
