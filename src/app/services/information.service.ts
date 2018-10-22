import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  
  constructor( private http: HttpClient) { }

  showSong(artistName: string, topMusic: string) {
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=artist.${topMusic}&artist=${artistName}&api_key=661117c2b4fb02732cec0f7dfb0b616e&format=json`);
   
  }
}
