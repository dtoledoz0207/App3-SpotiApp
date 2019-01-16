import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];




// ***** Esta creacion de rutas se hace con la ayuda de Angular Snipets ****
/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}*/
// **************************************************************************