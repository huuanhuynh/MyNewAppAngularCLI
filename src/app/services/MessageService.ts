import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService{
  _message:string[]=["default message 1."];
  Add(message:string){
    this._message.push((new Date()).toString() + message);
  }
  Clear(){
    this._message=[];
  }
}
