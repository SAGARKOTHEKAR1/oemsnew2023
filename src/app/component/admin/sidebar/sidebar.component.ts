import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private loginservice:LoginService ,private router:Router) { }

  ngOnInit(): void {
  }
 logout(){
  this.loginservice.logOut();
this.router.navigate(['login'])

 }
}
