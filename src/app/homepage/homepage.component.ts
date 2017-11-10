import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="container">
      <app-left-column></app-left-column>
      <app-right-column></app-right-column>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
