import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizeService } from 'src/app/services/quizservice/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private quizservice:QuizeService ,private activerout:ActivatedRoute ,private rout:Router) { }
  quiz_id:any;
  quizs:any;

  ngOnInit(): void {
    this.activerout.params.subscribe((res:any)=>{
   this.quiz_id=res.quiz_id;


    });
    this.quizservice.getQuizById(this.quiz_id).subscribe((res:any)=>{
    this.quizs=res
    console.log(res);
    
    })
  }
  starExam(){
    Swal.fire({
      title: 'Start Exam',
      text: "Are you sure want to Start Exam !",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'
    }).then((result) => {
      if (result.isConfirmed) {
  this.rout.navigate([`startExam/${this.quiz_id}`])
      }
    })
  }

}
