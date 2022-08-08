import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router) {}

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/login']);
  }
}
