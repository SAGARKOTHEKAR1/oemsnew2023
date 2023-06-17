import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(40)])
  })

  constructor(private loginService:LoginService , private router:Router) { }

  ngOnInit(): void {
  }

  sendLoginData(){
    console.log(this.loginData.value);
    this.loginService.generateToken(this.loginData.value).subscribe((res:any)=>{
      console.log(res);
      this.loginService.loginUser(res.token)
      this.loginService.getCurrentUser().subscribe((res:any)=>{
        console.log(res);
        this.loginService.setUser(res);
     if(this.loginService.getUserRol() == 'ADMIN'){
      this.router.navigate(['admin-dashbord']);
      this.loginService.loginStatusSubject.next(true)
     }else if( this.loginService.getUserRol()== 'NORMAL'){
      this.router.navigate(["user-dashbord"]);
      this.loginService.loginStatusSubject.next(true)
     }else{
      this.loginService.logOut();
     }

       
        
      },(err)=>{console.log(err);
      })
    },(err)=>{
      console.log(err);
      Swal.fire({
        position : 'center',
        icon: 'error',
        title: 'Invalid Details !! Try Again',
        showConfirmButton: false,
        timer: 1500
      })
    
   
         
    }
    )
    
  }



}
