import { Component } from '@angular/core';
import { GreetingComponent } from './ui/greeting.component';
import { async } from 'rxjs';
import { UserService } from './data-access/user.service';

@Component({
  standalone: true,
  selector: 'app-home',
  template: '<app-greeting [name]="name$" | async> <app-greeting>',
  imports: [GreetingComponent],
})
export class HomeComponent {
  constructor(private userService: UserService) {}

  name$ = this.userService.getName();
}
