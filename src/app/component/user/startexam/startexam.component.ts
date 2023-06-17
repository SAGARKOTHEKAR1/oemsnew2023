import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/questionservice/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startexam',
  templateUrl: './startexam.component.html',
  styleUrls: ['./startexam.component.css']
})
export class StartexamComponent implements OnInit {
timer:any;
  quiz_id:any;
  questions:any;
  marksGot:any;
  correctAnswers:any;
  attempted:any;
  isSubmit:boolean = false;
  constructor(private questionservice:QuestionService,private activerout:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerout.params.subscribe((res:any)=>{
      console.log(res.quiz_id);
      this.quiz_id= res.quiz_id;
      
    });

    this.questionservice.getQuestionByQuizId(this.quiz_id).subscribe((res:any)=>{
      console.log(res);
      this.questions = res;
      this.timer=this.questions.length*0.30*100;
      this.startTimer();
      
      
    })
  }
 
  getFormatedTime(){
 let mm = Math.floor(this.timer/60);
 let ss = this.timer - mm*60;
 return `${mm}:${ss}`
  }
  startTimer(){
    let t = window.setInterval(
      ()=>{
  if(this.timer<=0){
clearInterval(t)
  }else{
this.timer--
  }
      },1000
    )
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure want to End Exam !",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam'
    }).then((result) => {
      if (result.isConfirmed) {
   this.directSubmit();
      }
    })

  }
  directSubmit(){
    this.questionservice.directSubmit(this.questions).subscribe((res:any)=>{
      console.log(res);
      this.isSubmit=true;
      this.marksGot = res.marksGot;
      this.correctAnswers = res.correctAnswers;
      this.attempted = res.attempted;
      
    })

  }

  printResult(){
    window.print();
  }

}
