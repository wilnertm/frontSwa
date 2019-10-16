import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasDetailComponent } from './peliculas-detail/peliculas-detail.component';
import { PersonajesDetailComponent } from './personajes-detail/personajes-detail.component';
import { PlanetasDetailComponent } from './planetas-detail/planetas-detail.component';
import { EspeciesDetailComponent } from './especies-detail/especies-detail.component';
import { VehiculosDetailComponent } from './vehiculos-detail/vehiculos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculasDetailComponent,
    PersonajesDetailComponent,
    PlanetasDetailComponent,
    EspeciesDetailComponent,
    VehiculosDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
