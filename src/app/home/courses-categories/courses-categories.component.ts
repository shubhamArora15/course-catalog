import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.css']
})
export class CoursesCategoriesComponent implements OnInit {

  @Output() categorySelected = new EventEmitter();

  public category:any;
  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelected(event) {
    this.categorySelected.emit(event.target.value);
  }


}
