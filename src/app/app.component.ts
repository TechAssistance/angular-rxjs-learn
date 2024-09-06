import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, map, Observable } from 'rxjs';

let myObservable$ = from([1, 2, 3, 4, 5]);

myObservable$
  .pipe(map((value) => value * 2))
  .subscribe((val) => console.log(val));

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-rxjs-learn';
}
