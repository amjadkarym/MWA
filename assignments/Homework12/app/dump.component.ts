import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
  <div appIsVisible>Custom Directive</div>
  <p>here in dump</p>
    <ul>
      <li *ngFor="let val of names">{{val}}</li>
    </ul>
  `,
  styles: []
})
export class DumpComponent implements OnInit {

  @Input() names: string[];
  constructor() { }

  ngOnInit() {
  }

}
