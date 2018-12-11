import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs: ['counterChange'],
  template: `
    <button (click)=decrease()>-</button>{{countValue}}<button (click)=increase()>+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterChange=  new EventEmitter();
  countValue = 0;
  @Input() counter: number;
  constructor() { }
  increase() {
    this.countValue++;
    return false
  }
  decrease() {
    this.countValue--;
    return false
  }
  ngOnInit() {
    this.countValue = this.counter;
    this.counterChange.emit(this.countValue)
  }

}
