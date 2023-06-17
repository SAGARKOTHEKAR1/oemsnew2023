import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  public viewAllQuestion(quiz_id:any){
    return this.http.get(`${baseUrl}question/quiz/all/${quiz_id}`);
  };

  public getByIdQuestion(question_id:any){
    return this.http.get(`${baseUrl}question/${question_id}`);
  };

  public addQuestions(data:any){
    return this.http.post(`${baseUrl}question/`,data)
  };

  public deleteQuestions(question_id:any){
    return this.http.delete(`${baseUrl}question/${question_id}`)
  };

  public updateQuestions(question:any){
    return this.http.put(`${baseUrl}question/`,question)
  };

  public getQuestionByQuizId(quiz_id){
  return this.http.get(`${baseUrl}question/quiz/`+quiz_id);
  }

  public directSubmit(question:any){
 return this.http.post(`${baseUrl}question/direct-quiz/`,question);
  }

}
