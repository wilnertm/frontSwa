import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasDetailComponent } from './peliculas-detail/peliculas-detail.component';
import { PersonajesDetailComponent } from './personajes-detail/personajes-detail.component';
import { PlanetasDetailComponent } from './planetas-detail/planetas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculasDetailComponent,
    PersonajesDetailComponent,
    PlanetasDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
