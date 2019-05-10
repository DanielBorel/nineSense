import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {

  url: string = 'http://192.168.1.147:4000/home';

  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    const obj = {
      fd_name: messageContent.name,
      fd_email: messageContent.email,
      fd_subject: messageContent.subject,
      fd_message: messageContent.message
    };
    return this.http.post(`${this.url}/feedback`, obj);
  }

}
