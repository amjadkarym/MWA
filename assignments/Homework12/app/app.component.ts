import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
    <app-smart [names]="names"></app-smart>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app';
  names: Array<string> = ['amjad', 'karim'];
}
