import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/questionservice/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
quiz_id:any;
quiz_title:any;
question:any ;

constructor(private questionservice:QuestionService,private  activerout:ActivatedRoute){
  this.quiz_id = this.activerout.snapshot.params['id'];
  this.quiz_title= this.activerout.snapshot.params['title'];
}

  ngOnInit(): void {
    this.questionservice.viewAllQuestion(this.quiz_id).subscribe((res:any)=>{
      this.question = res;
      console.log(this.question);
    }, (err)=>{console.log(err);
    })
  }

  deleteQuestion(question_id:any){
    console.log(question_id);
    this.questionservice.deleteQuestions(question_id).subscribe((res)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          window.location.reload();
        }
      })

    })
    
  }

}
