import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  isClickRadio:boolean=false;
  id!:any;

    constructor(private service:HttpService,
                private router:Router
    ){}

    ngOnInit(): void {
      this.getDataFromBackend();
    }

  getDataFromBackend(){
      this.service.getAllEmployee()
      .subscribe((response:any)=>{
        console.log(response);
        this.empData=response;
      })
  }

  onEdit(id:any){
    this.isClickRadio=true;
    this.id=id;
  }

  onUpdate(){
    if(this.isClickRadio){
      //update Logic
      this.router.navigate(['/updateemp',this.id]);
    }else{
      alert("Please Select a Record to be Update...");
    }
  }

  onDelete(){
    if(this.isClickRadio){
        this.service.deleteEmp(this.id)
        .subscribe((response)=>{
          console.log(response);
          this.getDataFromBackend();
        });
        
    }else{
      alert("Please Select a Record to be Delete...");
    }

  }

}
