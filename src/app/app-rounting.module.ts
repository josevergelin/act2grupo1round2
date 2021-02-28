import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { AcordionComponent } from './acordion/acordion.component';


const routes: Routes = [
  {path: 'tabla', component: TablaComponent},
  {path: 'card', component: CardComponent},
  {path: 'tab', component: TabComponent},
  {path: 'acordion', component: AcordionComponent},
  {path: '', component: TablaComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRountingModule { }
