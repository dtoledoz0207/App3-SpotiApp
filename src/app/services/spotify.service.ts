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
      'Authorization': 'Bearer BQDHG7RyfSOeoE0LexOZWRZeOmbsvts4POFwBsjRosWc6wKS3cEJwOr93WBqJ2zQBSLDIokQsFBjn3yzodY'
    });

    return this.http.get(url, {headers});
  }

  

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map(data => data['albums'].items ));
  }


  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map(data => data['artists'].items ));
  }

}
