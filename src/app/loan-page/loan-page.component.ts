import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loan } from '../loan';
import { LogicServiceService } from '../logic-service.service';

@Component({
  selector: 'app-loan-page',
  templateUrl: './loan-page.component.html',
  styleUrls: ['./loan-page.component.css']
})
export class LoanPageComponent {
  loan:Loan=new Loan();
  id!:number;
  constructor(private loanService:LogicServiceService,private route:ActivatedRoute)
  {

  }
 addLoan()
 {
  this.id=this.route.snapshot.params['id'];
  
  return this.loanService.addLoan(this.loan,this.id).subscribe(data=>{
  })
 }

}
