import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

   @Output() childStrEvent=new EventEmitter();

   @Output() childArrOBjEvent=new EventEmitter();
     

   strData:string="Hopes so ur Enjoying Angular Module";

   
  arrProduct=[
    {
      name:"Iphone",
      price:100000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"RealMe",
      price:18000,
      qty:1
    },
    {
      name:"Vivo",
      price:12000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    },
];


  onSend(){
      this.childStrEvent.emit(this.strData);
      this.childArrOBjEvent.emit(this.arrProduct);
  }

}
