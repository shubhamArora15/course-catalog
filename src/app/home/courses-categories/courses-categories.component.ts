import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { coursesCategories } from '../../models/course.model'
@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.css']
})
export class CoursesCategoriesComponent implements OnInit {

  categories:any;

  @Output() categorySelected = new EventEmitter();

  public category:any;
 
  constructor() {
    this.categories = coursesCategories;
   }

  ngOnInit(): void {
  }

  onCategorySelected(event) {
    this.categorySelected.emit(this.category);
  }


}
