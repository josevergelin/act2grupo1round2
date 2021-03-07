import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lista-usuaros',
  templateUrl: './lista-usuaros.component.html',
  styleUrls: ['./lista-usuaros.component.css']
})
export class ListaUsuarosComponent implements OnInit {

  @Input() users: Array<string>
  @Input() mails: Array<string>
  @Output() totalUsers = new EventEmitter<number>();
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sendNumberUser() {
    this.count ++;
    this.totalUsers.emit(this.count)
    console.log(this.count)
  }
}
