import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  count: number = 0;

  contar(){
    this.count = this.count + 1;
    return this.count;
  }
}
