import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  //dependency injectiion
  constructor(private el: ElementRef) {
  }

  @HostBinding("style.backgroundColor")
  bgColor = "#343434";

  @HostListener("mouseenter")
  changeFontsize() {
    console.log("mouse enter");
    this.el.nativeElement.style.fontSize = "50px";
    this.el.nativeElement.style.backgroundColor = "white"

  }

  @HostListener("mouseleave")
  resetFontsize() {
    console.log("mouse leave");
    this.el.nativeElement.style.fontSize = "30px";
    this.el.nativeElement.style.backgroundColor = this.bgColor;


  }
}
