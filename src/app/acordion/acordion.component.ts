import { Component, OnInit } from '@angular/core';
import { EquipoService } from "../core/services/equipo.service";


@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {
  public isCollapsed = false;

  equipo:any[] = [];
  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
