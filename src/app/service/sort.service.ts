import { Injectable } from '@angular/core';
import {ICompany, MyServiceService} from "./my-service.service";


@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  getCompanies(companies:ICompany[],params:string){
    companies.sort(this.byField(params));
  }

  byField(param:string) {
    return (a:any, b:any) => a[param] > b[param] ? 1 : -1;
  }

}
