import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private Http:HttpClient) { }

  public loginStatusSubject = new Subject <boolean>();


  public generateToken(userData:any){
    return this.Http.post(`${baseUrl}generate-token`,userData)
  }

  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;

  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public isLogin(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr=="" || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  public getCurrentUser(){
    return this.Http.get(`${baseUrl}current-user`);
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr !=null){
   return JSON.parse(userStr)
    }else{
      this.logOut()
      return null;
    }
    

  }

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getUserRol(){
    let user = this.getUser();
   return user.authorities[0].authority;
  }
}
