import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { ReimbursementService } from '../../services/reimbursement.service';
import { HReimb } from '../../models/hreimb.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hReimb: HReimb;
  listable: boolean = true;

  constructor(private router: Router, private reimbService: ReimbursementService) { }

  ngOnInit() {
    // this.reimbService.getReimbursements().subscribe(reimbs => {
    //   if(reimbs == null) {
    //     this.listable = !this.listable;
    //   } else {
    //     this.reimbService.subscribers.next(reimbs);
    //     console.log(reimbs);
    //   }
    // });
    this.reimbService.getReimbursements();
  }

  toAddRequest() {
    this.router.navigate(['addrequest']);
  }
}
