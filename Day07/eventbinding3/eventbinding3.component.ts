import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {


  onChange(mydata:string){

    if(mydata.length>5){
      alert("Chacter Limit Exceeds...")
    }else{
      console.log("Change Event Occur..")
    }

    
  }

}
