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
      'Authorization': 'Bearer BQBkEE3SMTk-0EYKxPdgryo7h9uC0xPKG7CvePWvY5NgbTJ_v1nkicKKY9GNPFUSHY74BkNMLEEk_MnGXFc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe( data => {
      console.log(data);
    });
  }

}
