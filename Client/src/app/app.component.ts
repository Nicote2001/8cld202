import { Component } from '@angular/core';
import { Article } from './object/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  articles : Article[];

  constructor()
  {

  }
}

