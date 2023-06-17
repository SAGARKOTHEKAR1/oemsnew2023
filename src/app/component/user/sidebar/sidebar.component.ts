import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/categoryService/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private categoryservice:CategoryService) { }
  getAllcategory:any;

  ngOnInit(): void {
    this.categoryservice.getAllCategory().subscribe((res)=>{
      this.getAllcategory=res
    })
  }

}
