import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Loan } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LogicServiceService {
private baseURL1="http://localhost:2000/addcustomer";
private baseURL2="http://localhost:2000/getallcustomers";
private baseURL3="http://localhost:2000/addloan";

  constructor(private httpClient:HttpClient) { }
addCustomer(customer:Customer):Observable<object>
{
 return this.httpClient.post(`${this.baseURL1}`,customer);
}
getAllCustomers():Observable<Customer[]>
{
  return this.httpClient.get<Customer[]>(`${this.baseURL2}`);
}
addLoan(loan:Loan,id:number):Observable<object>
{
  return this.httpClient.post(`${this.baseURL3}/${id}`,loan);
}
}
