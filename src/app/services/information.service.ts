import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor( private http: HttpClient) { }

  //Método para obtener la API:
  getData (nameArtist: string , topTracks: string ){
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${topTracks}&artist=${nameArtist}&api_key=661117c2b4fb02732cec0f7dfb0b616e&format=json`)
    // .pipe(map(data => data['toptracks'].track));

    /* gettoptracks */
  }
}
