import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PcategoryComponent } from './pcategory/pcategory.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
const appRoutes=[
{path:"aboutus",component:AboutusComponent},
{path:"contactus",component:ContactusComponent},
{path:"products",component:ProductsComponent},
{path:"login",component:LoginComponent},
{path:"logout",component:LogoutComponent},
{path:"cart",component:CartComponent},
{path:"register",component:RegisterComponent},
{path:'pcategory/:category', component:PcategoryComponent},
{path:'product/:id', component:ProductComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    PcategoryComponent,
    ProductComponent,
    LogoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
