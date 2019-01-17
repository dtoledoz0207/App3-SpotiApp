import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

/* Si en el decorador @Injectable NO está la linea {providedIn: 'root'}, 
entonces tenemos que colocar SpotifyService en el providers del app.module.ts */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio de Spotify Listo!!");
  }


  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAlZCHyZ6e9Xe6G9gliGT4msGE58EFa2Yv_buO8Nxb8hgOpqelIgOv4p3V7jOU574-YCVomH0CMwUGZRqI'
    });

    return this.http.get(url, {headers});
  }

  

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map(data => data['albums'].items ));
  }


  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map(data => data['artists'].items ));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe( map(data => data['tracks']));
  }

}
