import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  //Guarda el valor del artista a buscar
  searchArtist: string;

  title = 'contador';
  canciones = [];
  nombre = '';
  imagen: string
  url = '';

  constructor(private _apiService: InformationService) {}

  getArtistTrack() {
      this._apiService.getData(this.searchArtist, 'getinfo')
      .subscribe((data:any) => {
        this.nombre = data['artist'].name,
          this.url = data['artist'].url,
          this.imagen = data['artist'].image[2]["#text"]
          console.log (data)
      })

  }
}
