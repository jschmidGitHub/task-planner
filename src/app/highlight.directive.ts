import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private el: ElementRef) {}

  @Input() appHighlight = false;

  ngOnInit() {
    if(this.appHighlight) {
      this.el.nativeElement.style.backgroundColor = "orange";
    }
  }
}