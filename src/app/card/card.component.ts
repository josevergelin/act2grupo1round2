import {Component, ElementRef, Input, OnInit, Output, SimpleChange, ViewChild} from '@angular/core';
import { ServicioService } from '../core/services/servicio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ServicioService]
})
export class CardComponent implements OnInit {
  totalMegusta: number = 0;
  constructor(private servicioService: ServicioService) {
    this.totalMegusta = servicioService.contar();
  }
  Incrementar (){
    this.totalMegusta++;
  }
  ngOnInit(): void {
  }


}
