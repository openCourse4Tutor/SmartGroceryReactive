import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public firstProductItemName = 'White Basmathi Rice';
  public storage = 10;
  public isLowInventory = true;

  constructor() {}

  ngOnInit(): void {}

  public getPriceofRice() {
    return 350;
  }

  public getStorage() {
    if (this.storage < 50) {
      this.isLowInventory = true;
    }
    return this.storage;
  }
}
