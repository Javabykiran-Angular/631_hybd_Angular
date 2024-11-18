import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

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


}
