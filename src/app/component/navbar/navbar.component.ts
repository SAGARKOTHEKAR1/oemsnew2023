import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogedIn=true;
  user:any;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.islogedIn=this.loginService.isLogin();
    this.user= this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe((res:any)=>{
      this.islogedIn = this.loginService.isLogin();
      this.user= this.loginService.getUser();
    
      // window.location.reload();
    })

   

  }

  logOut(){
    this.loginService.logOut();
    this.loginService.loginStatusSubject.next(false)
    this.router.navigate(['login'])
  }

}
