import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICompany, MyServiceService} from "../service/my-service.service";


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company!:ICompany;

  constructor(private route: ActivatedRoute, private companyService: MyServiceService) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.company=this.companyService.getCompanyById(id);

    }
  }

}
