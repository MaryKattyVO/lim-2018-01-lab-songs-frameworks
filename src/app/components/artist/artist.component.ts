import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';

// IMPORTAMOS MODELS
import { NameInterface } from '../../models/name-interfaces';
import { SongInterface } from '../../models/songs-interfaces';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  searchNameArtist: string;
  topSong: boolean;

  constructor(private api: InformationService) { }
  artist: NameInterface = {
    name: '',
    image: '',
  }

  ranking: SongInterface[] = [
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 },
    { name: '', listeners: 0, like: 0, dislike: 0 }]
 
// Evento al ejecutar formulario  
  onSong() {
    this.topSong = true;
    this.api.showSong(this.searchNameArtist, 'getinfo')
      .subscribe((res: any) => {
        this.artist.name = res.artist.name;
        this.artist.image = res.artist.image[3]['#text'];
      });

    this.api.showSong(this.searchNameArtist, 'gettoptracks')
      .subscribe((res: any) => {
        for (let i = 0; i < this.ranking.length; i++) {
          this.ranking[i].name = res.toptracks.track[i].name;
          this.ranking[i].listeners = res.toptracks.track[i].listeners;

          this.ranking[i].like = res.toptracks.track[i].listeners;
        }
      });
  }

  like(music) {
    let contador = 0;
    const index = this.ranking.indexOf(music);
    contador = this.ranking[index].like++;
  }

  dislike(music) {
    let contador = 0;
    const index = this.ranking.indexOf(music);
    contador = this.ranking[index].like--;
  }

  reset() {
    this.searchNameArtist = null;
    this.topSong = false;
    this.artist.name = null;
    this.artist.image = null;
  }
}
