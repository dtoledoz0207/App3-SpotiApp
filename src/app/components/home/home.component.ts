import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones:any[] = [];

  loading:boolean;

  error:boolean;
  errorMensaje:string;

  constructor(private spotify: SpotifyService) { 

    this.loading = true;

    this.error = false;

    this.spotify.getNewReleases().subscribe( (data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio)=>{
      this.error = true;
      this.loading = false;
      this.errorMensaje = errorServicio.error.error.message;
      //console.log(errorServicio);
    });
  }


}
