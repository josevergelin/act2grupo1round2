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


@NgModule({
  declarations: [
    AppComponent,
    AcordionComponent,
    AppiComponent,
    TabComponent,
    TablaComponent,
    CardComponent,
    BannerComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
