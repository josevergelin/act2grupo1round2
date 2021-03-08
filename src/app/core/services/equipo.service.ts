import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] = [
    {
      nombre:'José Vergelin',
      especialidad: 'Diseñador UX/UI',
      email: 'jvergelin@4devps.com',
    },
    {
      nombre:'Fausto Oviedo',
      especialidad: 'Diseñador Gráfico',
      email: 'foviedo@4devps.com',
    },
    {
      nombre:'Augusto Basante',
      especialidad: 'Marketing',
      email: 'abasante@4devps.com',
    },
    {
      nombre:'Eduardo Grijalva',
      especialidad: 'Developer',
      email: 'egrijalva@4devps.com',
    }

    ]

  constructor() {
    console.log('funcionando servicio')
  }
  obtenerEquipo(){
    return this.equipo;
  }
}
