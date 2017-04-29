import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from PADNUG!';
  time = new Date();

  constructor() {
    setInterval( () => {
      this.time = new Date();
    }, 1000);
  }
}
