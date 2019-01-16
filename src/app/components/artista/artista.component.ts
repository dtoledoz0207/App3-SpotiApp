import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};

  loadingArtist:boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify:SpotifyService) { 
    this.activatedRoute.params.subscribe(params => {
      
      this.getArtista(params['id']);

      this.loadingArtist = true;

    })
  }


  getArtista(id:string){
    this.loadingArtist = true;
    
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }


}
