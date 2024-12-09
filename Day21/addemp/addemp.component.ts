import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:any=<Employee>{};
  allCountry:any[]=[];
  isUpdate:boolean=false;

  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.getCoutryDataFromBackend();
    this.getDataFromURL();
  }

  getCoutryDataFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allCountry=response;
    });
  }

  getDataFromURL(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"));
      this.isUpdate=true;
      this.getEmpRecordFromBackend(param.get("id"))
    })
  }

  getEmpRecordFromBackend(id:any){
    this.service.getEmpById(id)
    .subscribe((response:any)=>{
      // console.log(response);
      this.addData=response;
    })
  }

  onSubmit(){

    if(this.isUpdate){
      // Update the data
      this.addData.updatedBy="admin";
      this.addData.updatedDate=Date.now();

      this.service.updateEmployee(this.addData)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate([""]);
      });

    }else{
      //add the data 
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
  
   
}
