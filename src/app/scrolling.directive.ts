import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolling]',

})
export class ScrollingDirective {

  constructor() {

  }
   one = 0;
  scrollingOften = 1000;


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      const two = window.pageYOffset;
      if ((two - this.one) > this.scrollingOften) {
        // console.log(this.one);
        // console.log(this.two);
        console.log(window.pageYOffset);
        this.one += this.scrollingOften;
      }
    }

}
