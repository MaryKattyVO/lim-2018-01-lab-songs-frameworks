import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'song';
  addLink(title, link){
    console.log("value:",title.value, link.value);
    return false;
  }
}
