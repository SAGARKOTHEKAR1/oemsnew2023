import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
userdata:any;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.userdata =this.loginservice.getUser();
    if(this.userdata.profile == "default.pgn"){
      this.userdata.profile='../../../assets/img/th.jpg'
    }
  }

}
