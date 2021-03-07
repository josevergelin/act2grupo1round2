import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createViewChild} from "@angular/compiler/src/core";

@Component({
  selector: 'app-form-generar-usuario',
  templateUrl: './form-generar-usuario.component.html',
  styleUrls: ['./form-generar-usuario.component.css']
})
export class FormGenerarUsuarioComponent implements OnInit {

  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('mail', {static: true}) mail: ElementRef;

  constructor() {
  }

  listUsers = [];
  listMails = [];
  totalSuscritos: number = 0;

  ngOnInit(): void {
  }

  enviarUsuario(name) {
    console.log(name);
    const user2 = this.name.nativeElement.value;
    console.log(user2);
    this.listUsers.push(user2);
    console.log(this.listUsers)
  }

  enviarMail(mail) {
    console.log(mail);
    const mail2 = this.mail.nativeElement.value;
    console.log(mail2);
    this.listMails.push(mail2);
    console.log(this.listMails)
  }
  addNewUser(number){
    this.totalSuscritos = number;
  }

}
