import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/questionservice/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  quiz_id:any;
  quiz_title:any;

  addquestion=new FormGroup({
    content: new FormControl('',[Validators.required]), 
    option1: new FormControl('',[Validators.required]),
    option2: new FormControl('',[Validators.required]),
    option3: new FormControl('',[Validators.required]),
    option4: new FormControl('',[Validators.required]),
    answer: new FormControl('',[Validators.required])
  });


  constructor(private questionservice:QuestionService , private activerout:ActivatedRoute ,private router:Router) { 
    this.quiz_id = this.activerout.snapshot.params['id'];
    this.quiz_title =this.activerout.snapshot.params['title'];
 

  }

  
  question={
  
    "content"  : this.addquestion.value.content,
    "option1" : this.addquestion.value.option1,
    "option2" : this.addquestion.value.option2,
    "option3" : this.addquestion.value.option3,
    "option4" : this.addquestion.value.option4,
    "answer"  : this.addquestion.value.answer
  }


 


  ngOnInit(): void {

  }
addQuestionSubmit(){
  console.log(this.addquestion.value);
 let question={
    "quiz": {
    quiz_id:this.quiz_id
    },
    "content"  : this.addquestion.value.content,
    "option1" : this.addquestion.value.option1,
    "option2" : this.addquestion.value.option2,
    "option3" : this.addquestion.value.option3,
    "option4" : this.addquestion.value.option4,
    "answer"  : this.addquestion.value.answer

  }

  console.log(question);
  
   this.questionservice.addQuestions(question).subscribe((res:any)=>{
    console.log(res);
    this.router.navigate([`admin-dashbord/allQuestion/${this.quiz_id}/${this.quiz_title}`]);
    
   }, (err)=>{console.log(err);
   })
  
}
}
