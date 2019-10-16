import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculasDetailComponent } from './peliculas-detail/peliculas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculasDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
