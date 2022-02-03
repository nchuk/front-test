import { Component, OnInit } from '@angular/core';
import {ICompany, MyServiceService} from "../service/my-service.service";
import {SortService} from "../service/sort.service";
import {FilterService} from "../service/filter.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies!: ICompany[] ;
  form! : FormControl;
  constructor(private companiesService: MyServiceService,
              private  sortService: SortService,
              private filterService: FilterService ) {
    this.getCompany();
  }

  ngOnInit(): void {
    this.getFilterCompany();
  }

  getCompany(){
    this.companiesService.companies
      .subscribe((companies:ICompany[]) =>{
        this.companies = companies;
      })

  }

  sortCompany(value: any) {
      this.sortService.getCompanies(this.companies,value.target.value);
  }

  getFilterCompany(){
    this.form = new FormControl("sadsdsds");
  }
}
