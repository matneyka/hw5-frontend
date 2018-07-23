import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    let u = localStorage.getItem('user');
    if(u != '{}' && u != undefined) {
      this.subscribers.next(JSON.parse(u));
    }
  }

  public loginUser(username: string,password: string) {
    console.log(`Attempting to login user: ${username}`);
    let json = JSON.stringify([username,password]);
    return this.http.post<User>(environment.apiUrl + 'login',json);
  }

  public logoutUser() {
    return this.http.get(environment.apiUrl + 'logout');
  }

  public isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public setState(){
    let bool = (localStorage.getItem('user') !== null && localStorage.getItem('user') != 'null')? true : false;
    console.log(bool);
    this.loggedIn.next(bool);
  }
}
