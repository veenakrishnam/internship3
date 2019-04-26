import { Component, OnInit } from '@angular/core';
import { ProductsdataserviceService } from '../productsdataservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dataServive:ProductsdataserviceService) { }

  ngOnInit() {
    this.dataServive.changeUserUpdate(false);
  }

}
