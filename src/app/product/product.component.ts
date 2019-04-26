import { Component, OnInit } from '@angular/core';
import {Products} from '../Products';
import { ProductsdataserviceService } from '../productsdataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
     
      product:Products;
      quantity:number=1;
      productImages: string[];
      mainImageSrc: string;
      isLoggedIn:boolean;
  constructor(private dataService:ProductsdataserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.product=this.dataService.getProductById(this.route.snapshot.params["id"]);
    this.mainImageSrc = this.product.img1;
    this.productImages = [this.product.img1,this.product.img2,this.product.img3,this.product.img4,this.product.img5];
    this.dataService.currentLoginUpdate.subscribe(
      (response)=>
      {
        if(response)
        {
          this.isLoggedIn=true;
        }
        else{
          this.isLoggedIn=false;
        }
      }
  );
  }
  highlight(e){

    if(e.type==="mouseenter"){
      this.mainImageSrc = e.srcElement.src;
      e.srcElement.style.border = "solid 2px red"; 
    }else{
       e.srcElement.style.border = "none";
      this.mainImageSrc = this.product.img1;   
    }
 }

 
 addToCart(){
  if(this.isLoggedIn){
    this.dataService.addToCart(this.product.id,this.quantity).subscribe(       
           (response) => {  
             if(response.message == 1){
               alert("Added to cart successfully")

               this.dataService.getCart();
              } else if(response.message == -1)
               alert("Something went wrong");
               

           }

    );
 
  }else{
     alert("Login first");
     this.router.navigate(["/login"]);
  }

}


}
