import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public firstProductItemName = "White Basmathi Rice" ;
  constructor() { }

  ngOnInit(): void {
  }
  
  public getPriceofRice(){
    return 350;
  }

}
