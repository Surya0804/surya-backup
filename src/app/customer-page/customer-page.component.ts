import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { LogicServiceService } from '../logic-service.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
  customer:Customer=new Customer();
  customers!:Customer[];
  constructor(private customerService:LogicServiceService,private router:Router)
  {
  this.getAllCustomers();
  }
  addCustomer()
  {
   return this.customerService.addCustomer(this.customer).subscribe(data=>{
    alert("data inserted");
    this.getAllCustomers();
    window.location.reload();


    
   })
  }
  getAllCustomers()
  {
    return this.customerService.getAllCustomers().subscribe(data=>{
this.customers=data;
    })
  }
  gotoLoanPage(id:number)
  {
    this.router.navigate(['loan-page',id]);
  }


}
