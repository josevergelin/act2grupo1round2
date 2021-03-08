import { Component, OnInit } from '@angular/core';
import { PersonalService } from "../core/services/personal.service";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personal:any[]=[];
  constructor(private servicePersonal:PersonalService) {
    this.personal = servicePersonal.obtenerPersonal();
  }



  ngOnInit(): void {
  }

}
