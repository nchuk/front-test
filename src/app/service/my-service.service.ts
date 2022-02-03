import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface ICompany{
  logo:string;
  suffix: string;
  business_name: string;
  industry: string;
  type: string;
  id:string;
  catch_phrase:string;
  phone_number:string;
  full_address:string;
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  companies20: ICompany[] =[];
  companies: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>([]) ;

  constructor(private http: HttpClient) {
    this.initialization();
  }

  getCompany():Observable<ICompany[]>{
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=100');
  }

  initialization(){
    this.getCompany()
      .subscribe(companies =>{
        this.companies20 = companies;
        this.companies.next(companies);
      })
  }

  getCompanyById(id: string){
    const company = this.companies20.find(value => {
      return value.id == id;
    })
    return <ICompany>company;
  }


}
