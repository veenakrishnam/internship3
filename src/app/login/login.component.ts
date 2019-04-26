import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsdataserviceService } from '../productsdataservice.service';
import {User} from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean=false;
  user:User;
  constructor(private dataService:ProductsdataserviceService) { }

  ngOnInit() {
  }
login(f)
{
    this.dataService.login(f.value.email,f.value.password).subscribe(
      (response)=>
      {
        if(response.message==1)
        {
          alert("Login successfull!!!");
          this.dataService.changeUserUpdate(true);
        this.dataService.getUserFromDb(f.value.email).subscribe(
       
            (response)=>
            {
              
              this.user=new User();
              this.user=response;
              this.dataService.setUser(this.user);
              
            }
          );
         
          

        
            
        }
        else
        {
            alert("invalid login credentials!!!");
        }
      }

    );
}
}
