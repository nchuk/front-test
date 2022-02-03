import {Component, Input, OnInit} from '@angular/core';
import {ICompany, MyServiceService} from "../../service/my-service.service";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {

 @Input() company!:ICompany;
  constructor(private route: ActivatedRoute, private companyService: MyServiceService) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.company=this.companyService.getCompanyById(id);

    }}


}
