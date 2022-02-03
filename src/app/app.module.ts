import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {MyServiceService} from "./service/my-service.service";
import { CompanyItemComponent } from './components/company-item/company-item.component';


const appRoutes: Routes =[
  {path:"",component: LayoutComponentComponent, children:[
      {path: "", redirectTo:'/list', pathMatch:'full'},
      {path:"list",component: CompanyListComponent},
      {path:"detail/:id",  component:CompanyDetailComponent}
    ] },
]
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
