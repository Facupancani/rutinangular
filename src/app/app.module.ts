import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { RoutineComponent } from './routine/routine.component';
import { RutinangularHomeComponent } from './rutinangular-home/rutinangular-home.component';
import { RutinangularAboutComponent } from './rutinangular-about/rutinangular-about.component';
import { IntMeterComponent } from './int-meter/int-meter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesListComponent,
    RoutineComponent,
    RutinangularHomeComponent,
    RutinangularAboutComponent,
    IntMeterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
