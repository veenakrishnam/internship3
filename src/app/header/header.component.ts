import { Component, OnInit } from '@angular/core';
import { ProductsdataserviceService } from '../productsdataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  constructor(private dataService:ProductsdataserviceService) { }

  ngOnInit() {
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

}
