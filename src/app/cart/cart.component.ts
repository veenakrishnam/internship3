import { Component, OnInit } from '@angular/core';
import { ProductsdataserviceService } from '../productsdataservice.service';
import { Router } from '@angular/router';
import {Cart} from '../cart';
import { Products } from '../Products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})export class CartComponent implements OnInit {

  
  carts: Cart[] = [];
  product:Products;

  constructor(private productDataService:ProductsdataserviceService,private router: Router) { }

  ngOnInit() {

    this.carts = this.productDataService.returnUserCart();
    console.log(this.carts);
    
    
  }

  getProductName(productId){
     return this.productDataService.getProductById(productId).name;
  }

  getProductPrice(productId){
    return this.productDataService.getProductById(productId).price;
  }

  getProductImage(productId){
    return this.productDataService.getProductById(productId).img1;
  }

  placeOrder(productId,quantity,cartId){
    this.router.navigate(["/buy",productId,quantity,cartId]);
  }


  removeItem(cartId,index){
  
      this.productDataService.removeFromCart(cartId).subscribe(
        
         (response) => {
            
             if(response.message == 1){
                 
                  if(this.carts.length == 1){
                     this.carts = [];
                  }else{

                  this.carts.splice(1,index);                

                  }
             }else if(response.message == -1){
               alert("Something went wrong")
             }

         }


      );
     
  }
}

