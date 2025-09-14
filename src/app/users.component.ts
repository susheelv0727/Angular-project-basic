import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users$ | async; trackBy: trackById">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  users$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}

  trackById(index: number, user: User) {
    return user.id;
  }
}
