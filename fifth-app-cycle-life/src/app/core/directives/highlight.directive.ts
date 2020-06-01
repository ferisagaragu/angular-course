import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') enterMouse() {
    this.elementRef.nativeElement.style.backgroundColor = this.color ? this.color : 'yellow';
  }

  @HostListener('mouseleave') leaveMouse() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

}
