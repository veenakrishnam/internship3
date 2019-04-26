import { Component, OnInit } from '@angular/core';
import {Products} from '../Products';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsdataserviceService } from '../productsdataservice.service';
@Component({
  selector: 'app-pcategory',
  templateUrl: './pcategory.component.html',
  styleUrls: ['./pcategory.component.css']
})
export class PcategoryComponent implements OnInit {
products:Products[];
  constructor(private route:ActivatedRoute,private router:Router,private dataService:ProductsdataserviceService) { }

  ngOnInit() {
  
   this.products= this.dataService.getProductsCategory(this.route.snapshot.params["category"]);
   console.log("From pcategory:"+this.products);
  }
  showDescription(id){
    this.router.navigate(["/product",id]);
 }


}
