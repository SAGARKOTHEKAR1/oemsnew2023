import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpData=new FormGroup({
    username:new FormControl(null,[Validators.required,]),
    password:new FormControl(null,[Validators.required,]),
    firstname:new FormControl(null,[Validators.required,]),
    lastname:new FormControl(null,[Validators.required,]),
    email:new FormControl(null,[Validators.required,]),
    phone:new FormControl(null,[Validators.required,])
  })
  constructor(private signupservice:SignupService ,private router :Router) { }

  ngOnInit(): void {
  }
  sendSignUPData(){
    console.log(this.signUpData.value);
    this.signupservice.saveUser(this.signUpData.value).subscribe((res:any)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${res.username}`,
     
        timer: 1500

      });
      this.router.navigate([''])
    }, (err:any)=>{
      Swal.fire({
        position:'bottom-end',
        icon: 'error',
        title: `${err}`,
      
        timer: 1500
      })
    }
    )
    
    
  }
}
