import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { Reimbursement } from '../models/reimbursement.model';
import { User } from '../models/user.model';
import { HReimb } from '../models/hreimb.model';
import { environment } from '../../environments/environment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  subscribers: BehaviorSubject<HReimb> = new BehaviorSubject<HReimb>(null);

  constructor(private http: HttpClient) {
    let reimb = localStorage.getItem('reimbursements');
    if(reimb != '{}' && reimb != undefined) {
      this.subscribers.next(JSON.parse(reimb));
    }
  }

  public getReimbursements() {
    console.log('Attempting to get reimbursements for: ')
    console.log(localStorage.getItem('user'));
    console.log(localStorage.getItem('view'));
    //let json = JSON.stringify(localStorage.getItem('version'));
    //return this.http.post<HReimb>(environment.apiUrl + 'getReimbursements',json);
  }
}
