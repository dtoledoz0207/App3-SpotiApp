import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Esta linea es para las rutas como se crearon en el curso
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

// IMPORTAR RUTAS
// Esta linea es para las rutas como se crearon en el curso
import {ROUTES} from './app.routes';

/* Importacion de rutas creadas con la ayuda de Angular Snipets 
    de esta forma en el imports solo se coloca AppRoutingModule
*/
//import {AppRoutingModule} from './app.routes';


// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
