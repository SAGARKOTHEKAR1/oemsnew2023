import { Component, OnInit } from '@angular/core';
import { QuizeService } from 'src/app/services/quizservice/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quize',
  templateUrl: './view-quize.component.html',
  styleUrls: ['./view-quize.component.css']
})
export class ViewQuizeComponent implements OnInit {
allQuizes:any
  constructor(private quizeService:QuizeService) { }

  ngOnInit(): void {
    this.quizeService.getAllQuizes().subscribe((res)=>{
      this.allQuizes = res;
      console.log(this.allQuizes);
    },(err)=>{console.log(err);
    })
  }
   deleteQuize(quiz_id:any){
  console.log(quiz_id);
  this.quizeService.deleteQuiz(quiz_id).subscribe((res)=>{
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
