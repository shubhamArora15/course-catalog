import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {


  categoryForFilter: any;
  searchForFilter: any;

  constructor(private course: HomeService) {
  }

  ngOnInit(): void {
    // Get all categories 
    // this.getCategories(); // there was an error in backend so commented the code

    // Get all courses
    // this.getCourses();
  }


  // get Filter courses after event and sending as attribute value for courses component
  filterCategoryCourse(value) {
    this.categoryForFilter = value;
  }

  // get filter search keywords after event and sending as attribute value for courses component
  filterSearchCourse(value) {
    this.searchForFilter = value;
  }


  getCategories() {
    this.course.getCategories().subscribe(data => {
    })
  }

  getCourses() {
    this.course.getCategories().subscribe(data => {
    })
  }

}
