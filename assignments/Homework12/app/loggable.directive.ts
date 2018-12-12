import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor() { 
  }


  @HostListener("click", ["$event.target"]) clickListener(element) {
    console.log(`${element.tagName.toUpperCase()} element has been clicked`);
    return false;
  }
}
