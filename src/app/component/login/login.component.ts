import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loggedUser = localStorage.getItem('user');
  isValid: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.loggedUser != null && this.loggedUser != 'null') {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this.userService.loginUser(this.username,this.password).subscribe(users => {
      if(users == null) {
        this.isValid = !this.isValid
      } else {
        this.userService.subscribers.next(users);
        console.log(users);
        localStorage.setItem('user',JSON.stringify(users));
        localStorage.setItem('view',JSON.stringify('all'));
        console.log(`User, ${this.username}, successfully logged in!`);
        console.log(localStorage.getItem('user'));
//        this.userService.setState();
        this.router.navigate(['dashboard']);
      }
    })
  }
}
