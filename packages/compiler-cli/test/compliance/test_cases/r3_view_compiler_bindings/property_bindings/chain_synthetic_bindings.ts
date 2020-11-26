import {Component} from '@angular/core';

@Component({
  template: `
    <button
      [title]="myTitle"
      [@expand]="expansionState"
      [tabindex]="1"
      [@fade]="'out'"></button>
    `
})
export class MyComponent {
  expansionState = 'expanded';
}
