import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: `app-greeting`,
  template: `
    @if (name) {
      <h2>Hi, {{ name }}!</h2>
    }
  `,
})
export class GreetingComponent {
  @Input() name?: string | null;
}
