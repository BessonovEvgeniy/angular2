import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  color: string = "blue";

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    console.log('click');
    var color = "blue";
    this.highlight(color);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouseenter');
    var color = "red";
    this.highlight(color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('mouseleave');
    this.highlight(null);
  }

  highlight(color: string) {
    console.log('Color will be changed to ' + color);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
