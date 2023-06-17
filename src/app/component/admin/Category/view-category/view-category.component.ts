import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService, private router:Router ) { }

  allCategory:any

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res)=>{
      this.allCategory= res;
      console.log(this.allCategory);
      
    })
  }

  deletecategory(category_id){
    this.categoryService.deleteCategory(category_id).subscribe((res)=>{
       
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
