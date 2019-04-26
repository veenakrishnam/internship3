import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { NgForm } from '@angular/forms';
import { ProductsdataserviceService } from '../productsdataservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  message:number;
  constructor(private dataService:ProductsdataserviceService) { }

  ngOnInit() {
  }
  register(f:NgForm)
  {
    this.user=new User();
    this.user.firstName=f.value.fname;
    this.user.lastName=f.value.lname;
    this.user.email=f.value.email;
    this.user.password=f.value.password;
    this.user.phoneNumber=f.value.contactnum;
    this.user.addressLine1=f.value.address1;
    this.user.addressLine2=f.value.address2;
    this.user.state=f.value.state;
    this.user.pincode=f.value.pin;
    console.log(this.user);
      this.dataService.register(this.user).subscribe(
          (response)=>
          {
            if(response.message==1)
            {
              alert("Registered Successfully");
            }
            else
            {
                alert("Error in registration");
            }
          }



      );
   
    
  }
 

}

