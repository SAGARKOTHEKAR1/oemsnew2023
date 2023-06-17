import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public adcategory(categoryData:any){
    return this.http.post(`${baseUrl}category/`,categoryData,{responseType:'text'})
  }

  public getAllCategory(){
    return this.http.get(`${baseUrl}category/`)
  }

  public getCategoryById(category_id:any){
    return this.http.get(`${baseUrl}category/`+category_id)
  }

  public updateCategoryById(categoryData:any){
    return this.http.put(`${baseUrl}category/`,categoryData)
  }

  public deleteCategory(category_id:any){
    return this.http.delete(`${baseUrl}category/`+category_id)
  }

}
