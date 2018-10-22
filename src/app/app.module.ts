import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';

// Servicios: para poder reutilizar en todos los componentes
import { InformationService } from './services/information.service';

import {FormsModule} from  '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
