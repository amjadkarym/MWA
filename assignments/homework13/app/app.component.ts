import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['users']">Users</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(data : DataService) {
    data.getOnlineData();
  }

}
