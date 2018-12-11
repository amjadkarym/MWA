import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private e: ElementRef, private r: Renderer2) { 
    // e.nativeElement.style.fontSize = '22px'
    r.setStyle(e.nativeElement, 'font-size', '22px')
  }

  @HostListener('mouseenter') foo() { this.e.nativeElement.style.color = 'red'; this.myBG = 'yellow' }
}
