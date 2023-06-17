import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
updatecategory=new FormGroup({
  category_id:new FormControl (null,[Validators.required]),
  title:new FormControl (null,[Validators.required]),
  description:new FormControl (null,[Validators.required])
})
  constructor(private categoryService:CategoryService ,private activeRout:ActivatedRoute ,private router:Router) { }
category_id:any;
  ngOnInit(): void {
    this.activeRout.params.subscribe((res:any)=>{
      console.log(res);
      this.category_id = res.id;
      
    })
    this.categoryService.getCategoryById(this.category_id).subscribe((res:any)=>{
      this.updatecategory.setValue(res);
    })
  }
  updateCategory(){
    console.log(this.updatecategory.value);
    this.categoryService.updateCategoryById(this.updatecategory.value).subscribe((res:any)=>{
      Swal.fire({
        title:'Category Update',
        icon:'success',
        timer:1000
  
      })
      this.router.navigate(['admin-dashbord/allCategory'])
    }, err=>{console.log(err);
    })
    
  }
}
