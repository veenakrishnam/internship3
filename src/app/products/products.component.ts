import { Component, OnInit } from '@angular/core';
import { ProductsdataserviceService } from '../productsdataservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataService:ProductsdataserviceService) { }
 
  ngOnInit() {
        this.dataService.getProductsFromDb();
  }
  
}
