import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[border]'
})
export class ChangeBorderDirective {

  @Input('border')
  borderWeight = 1;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.changeBorder();
  }

  changeBorder() {
    this.renderer.setStyle(this.el.nativeElement, 'border', this.borderWeight + 'px groove black');
  }
}
