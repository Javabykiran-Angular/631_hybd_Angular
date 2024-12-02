import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  onSubmit(f:NgForm){
    console.log(f.value.myusername);
    console.log(f.value.comment)
  }

}
