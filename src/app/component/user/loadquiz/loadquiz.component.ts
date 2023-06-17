import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizeService } from 'src/app/services/quizservice/quize.service';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit {

  constructor(private activroute:ActivatedRoute , private quizservice:QuizeService) { }
 quizzes:any;
 category_id:any;
  ngOnInit(): void {
    this.activroute.params.subscribe((res:any)=>{
      console.log(res.category_id);
      this.category_id= res.category_id;

      if(this.category_id == 0){
        this.quizservice.getActiveQuizes().subscribe((res:any)=>{
          this.quizzes=res;
          console.log(this.quizzes);
          
        })
      } else{
        this.quizservice.getActiveQuizesOfCategory(this.category_id).subscribe((res:any)=>{
          this.quizzes=res;
        })

      }

      
    })
  }

}
