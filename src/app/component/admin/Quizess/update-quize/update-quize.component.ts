import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { QuizeService } from 'src/app/services/quizservice/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quize',
  templateUrl: './update-quize.component.html',
  styleUrls: ['./update-quize.component.css']
})
export class UpdateQuizeComponent implements OnInit {
  category:any;
  category_data:any;
  id:any;
  updatequize=new FormGroup({
    quiz_id:new FormControl(null,[Validators.required]),
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])
  })
  constructor(private quizservice:QuizeService,private categoryservice:CategoryService,
    private router:Router , private activetedrout:ActivatedRoute) { 
      this.id = this.activetedrout.snapshot.params['id'];
  console.log(this.id);
  this.quizservice.getQuizById(this.id).subscribe((res)=>{
    this.category_data = res;

  },(err)=>{console.log(err);
  })
  }

  ngOnInit(): void {
    this.categoryservice.getAllCategory().subscribe((res)=>{
      this.category = res;

    },err=>{console.log(err);
    });

  }
  
  updateQuiz(){
    let updatequizes:any ={
      quiz_id:this.updatequize.value.quiz_id,
      title:this.updatequize.value.title,
      description: this.updatequize.value.description,
      maxMarks: this.updatequize.value.maxMarks,
      numberOfQuestions: this.updatequize.value.numberOfQuestions,
      active: this.updatequize.value.active,
      category:{
        category_id: this.updatequize.value.category_id,
   
      }

    }


    console.log(updatequizes);
    this.quizservice.updateQuizById(updatequizes).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        title:'Category Update',
        icon:'success',
        timer:1000
  
      })
      this.router.navigate(['admin-dashbord/allQuize'])
      
    },err=>{console.log(err);
    })

    
  }

}
