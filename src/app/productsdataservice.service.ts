import { Injectable } from '@angular/core';
import {Products} from './Products';
import {User} from './User';
import { HttpClient,HttpParams  } from '@angular/common/http';
import  {Cart} from './cart';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsdataserviceService {

user:User;
product:Products;
carts: Cart[] = [];

//Make User Login Observable

private userLoginUpdate = new BehaviorSubject(false);
currentLoginUpdate = this.userLoginUpdate.asObservable();

changeUserUpdate(message: boolean) {
  this.userLoginUpdate.next(message)
}



constructor(private http:HttpClient) { }

products:Array<Products>=[];

getProductsFromDb()
{
  this.http.get<Products[]>("http://localhost:8080/GreatOutdoors/ProductsServlet").subscribe(
  (response)=>
  {
    this.products=response;
  } 
);

}



getProductsCategory(category:string):Products[]
{
 
  return this.products=this.products.filter(product=>product.category==category);
  
}
getProductById(id:number):Products
{
  return this.product=this.products.find(product=>product.id==id);
}
// register(user: User)
// {
//   return this.http.post<{message:number}>("http://localhost:8080/GreatOutdoors/RegisterServlet",user) ;
// }


login(email:string,password:string)
{
  return this.http.post<{"message":number}>("http://localhost:8080/GreatOutdoors/LoginServlet",{"email":email,"password":password});
}











register(user:User)
{
 return  this.http.post<{"message":number}>("http://localhost:8080/GreatOutdoors/RegisterServlet",user);
}



addToCart(productId,quantity){

   
    
  return this.http.post<{message:number}>("http://localhost:8080/GreatOutdoors/CartServlet",{"operation":1,"userId":this.user.id,"productId":productId,"quantity":quantity});

}

removeFromCart(cartId){

  return this.http.post<{message:number}>("http://localhost:8080/GreatOutdoors/CartServlet",{"operation":-1,"cartId":cartId});

}

getCart(){

    

  const params = new HttpParams().set("userId",this.user.id+"");


  
  return this.http.get<Cart[]>("http://localhost:8080/GreatOutdoors/CartServlet",{params: params}).subscribe(
        
      (response) => {

             this.carts = response
           //  console.log(this.carts);

      }

  );
  

}

returnUserCart(){
  this.getCart();

  return this.carts;

}
getUserFromDb(email:string)
{
return this.http.post<User>("http://localhost:8080/GreatOutdoors/UserServlet",{"email":email})
}

 setUser(user:User)
 {
   this.user=user;
  
 }
}
