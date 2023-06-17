import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { QuizeService } from 'src/app/services/quizservice/quize.service';

@Component({
  selector: 'app-add-quize',
  templateUrl: './add-quize.component.html',
  styleUrls: ['./add-quize.component.css']
})
export class AddQuizeComponent implements OnInit {
  categoryId:any;
  addquiz=new FormGroup({
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])
  })
  constructor(private quizeService:QuizeService , private categoryService:CategoryService, private rout:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res)=>{
      this.categoryId = res;
      console.log(this.categoryId);
      
    })
  }
  addQuize(){
    let addquizes:any ={
      title:this.addquiz.value.title,
      description: this.addquiz.value.description,
      maxMarks: this.addquiz.value.maxMarks,
      numberOfQuestions: this.addquiz.value.numberOfQuestions,
      active: this.addquiz.value.active,
      category:{
        category_id: this.addquiz.value.category_id,
        description: this.categoryId.description,
        title: this.categoryId.title
      }

    }
    console.log(addquizes);
    this.quizeService.addQuiz(addquizes).subscribe((res)=>{
      console.log(res);
      
      this.rout.navigate(['admin-dashbord/allQuize'])
    
      
    })
    
  }
}
