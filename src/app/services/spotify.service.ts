import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/* Si en el decorador @Injectable NO está la linea {providedIn: 'root'}, 
entonces tenemos que colocar SpotifyService en el providers del app.module.ts */
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio de Spotify Listo!!");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaXgeoQoXVWvtJ0v8nv0bbc9Swe8NNT6CCJIHP93HN5SVjOQdTu_ih2cjTaeyiCxBe8r_n8OZ2iBYKmnM'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }


  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaXgeoQoXVWvtJ0v8nv0bbc9Swe8NNT6CCJIHP93HN5SVjOQdTu_ih2cjTaeyiCxBe8r_n8OZ2iBYKmnM'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }

}
