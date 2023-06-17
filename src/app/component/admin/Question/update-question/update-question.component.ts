import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionService } from 'src/app/services/questionservice/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  question_id:any;
  quiz_title:any;
  quiz_id:any;
  questionData:any;

  updatequestion=new FormGroup({
    quiz_id :new FormControl ('',[Validators.required]),
    question_id: new FormControl ('',[Validators.required]),
    content: new FormControl('',[Validators.required]), 
    option1: new FormControl('',[Validators.required]),
    option2: new FormControl('',[Validators.required]),
    option3: new FormControl('',[Validators.required]),
    option4: new FormControl('',[Validators.required]),
    answer: new FormControl('',[Validators.required])
  });
  constructor(private questionservice:QuestionService ,private activerout:ActivatedRoute, private router:Router) {
    this.quiz_id = this.activerout.snapshot.params['id'];
    this.quiz_title =this.activerout.snapshot.params['title'];
    this.question_id =this.activerout.snapshot.params['id']
   }
  question:any
  ngOnInit(): void {
 
    this.questionservice.getByIdQuestion(this.question_id).subscribe((res:any)=>{
      this.question = res;
    })
  }
  updateQuestion(){
    console.log(this.updatequestion.value);
    let question={
      quiz: {
      quiz_id:this.question.quiz.quiz_id
      },
      question_id : this.question.question_id,
      content  : this.updatequestion.value.content,
      option1 : this.updatequestion.value.option1,
      option2 : this.updatequestion.value.option2,
      option3 : this.updatequestion.value.option3,
      option4 : this.updatequestion.value.option4,
      answer  : this.updatequestion.value.answer
    }
    this.questionservice.updateQuestions(question).subscribe((res:any)=>{
      console.log(res);
      Swal.fire({
        title:'Category Update',
        icon:'success',
        timer:1000
      })
   this.router.navigate([`admin-dashbord/allQuestion/${this.question.quiz.quiz_id}/${this.quiz_title}`])
    },err=>{console.log(err);
    })

  }
}
