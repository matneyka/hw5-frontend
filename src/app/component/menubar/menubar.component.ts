import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  navbarOpen: boolean;
  loggedIn: boolean;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // localStorage.clear();
    this.navbarOpen = false;
    this.loggedIn = (localStorage.getItem('user') !== null && localStorage.getItem('user') != 'null') ? true : false;
    // this.userService.isLoggedIn().subscribe(bool => this.loggedIn = bool);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log('Logging out, ');
    console.log(user);
    localStorage.setItem('user', null);
    // this.userService.setState();
    this.userService.logoutUser().subscribe(() => this.router.navigate(['login']));
  }
}
