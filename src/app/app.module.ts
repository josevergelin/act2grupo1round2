import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionComponent } from './acordion/acordion.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppiComponent } from './appi/appi.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TablaComponent } from './tabla/tabla.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import {RouterModule,Routes} from '@angular/router';
import { AppRountingModule } from './app-rounting.module';
import {PersonalService} from "./core/services/personal.service";
import { FormGenerarUsuarioComponent } from './form-generar-usuario/form-generar-usuario.component';
import { ListaUsuarosComponent } from './lista-usuaros/lista-usuaros.component';

//Servicios
import { EquipoService } from './core/services/equipo.service';



@NgModule({
  declarations: [
    AppComponent,
    AcordionComponent,
    AppiComponent,
    TabComponent,
    TablaComponent,
    CardComponent,
    BannerComponent,
    FormGenerarUsuarioComponent,
    ListaUsuarosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    AppRountingModule,
    RouterModule,
  ],
  providers: [PersonalService, EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
