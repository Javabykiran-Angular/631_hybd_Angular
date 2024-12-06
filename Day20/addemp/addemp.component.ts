import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:any=<Employee>{};
  allCountry:any[]=[];

  constructor(private service:HttpService,
              private router:Router
  ){}
  ngOnInit(): void {
    this.getCoutryDataFromBackend();
  }

  getCoutryDataFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allCountry=response;
    });
  }


  onSubmit(){
  
    this.addData.createdBy='Admin';
    this.addData.createdDate=Date.now();
    this.addData.updatedBy='Admin';
    this.addData.updatedDate=Date.now();
    // console.log(this.addData);
    this.service.addEmpRecord(this.addData)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate([""]);
    });
  }

}
