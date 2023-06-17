import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

addCategory= new FormGroup({
  title:new FormControl (null,[Validators.required]),
  description:new FormControl (null,[Validators.required])
})
  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }
AddCategorys(){
  console.log(this.addCategory.value);
  this.categoryService.adcategory(this.addCategory.value).subscribe((res)=>{
    Swal.fire({
      title:'Category Added',
      icon:'success',
      timer:1000

    })
    this.router.navigate(['admin-dashbord/allCategory'])
  },(err)=>{console.log(err);
  })
  
}
}
