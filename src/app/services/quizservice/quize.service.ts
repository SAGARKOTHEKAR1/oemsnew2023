import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private http:HttpClient) { }

  public getAllQuizes(){
    return this.http.get(`${baseUrl}quiz/`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}quiz/`,quiz);
  }

  public deleteQuiz(quiz_id:any){
    return this.http.delete(`${baseUrl}quiz/`+quiz_id, {responseType:'text'});
  }

  public getQuizById(quiz_id:any){
    return this.http.get(`${baseUrl}quiz/`+quiz_id);
  }

  public updateQuizById(quizData:any){
    return this.http.put(`${baseUrl}quiz/`,quizData);
  }

  public getQuizOfCategory(category_id:any){
    return this.http.get(`${baseUrl}quiz/category/`+category_id);
  }

  public getActiveQuizes(){
    return this.http.get(`${baseUrl}quiz/active`);
  }

  public getActiveQuizesOfCategory(category_id:any){
  return this.http.get(`${baseUrl}quiz/category/active/`+category_id);
  }





}
