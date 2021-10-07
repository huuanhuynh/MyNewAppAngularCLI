import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/MessageService';

@Component({
  selector: 'app-bottom-message',
  templateUrl: './bottom-message.component.html',
  styleUrls: ['./bottom-message.component.css']
})
export class BottomMessageComponent implements OnInit {
  // tham số public messageService được dùng trong các property html. ví dụ (click)="messageService.Clear()"
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

}
