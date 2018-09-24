import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(oneMessage) {
    this.messages = this.messages.filter(mess => {
      return mess !== oneMessage;
    });
  }

  clearAll() {
    this.messages = [];
  }
}
