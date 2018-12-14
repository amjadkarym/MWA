import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userdetails',
  template: `
  <p>User Details Component</p>
  {{userInfo}}
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {

  userInfo;
  constructor(dataService : DataService, route: ActivatedRoute) { 
    route.params.subscribe(param => {

      this.userInfo = JSON.stringify(dataService.getUserById(param.id));
      console.log(this.userInfo);

  });
  }

  ngOnInit() {
  }

}
