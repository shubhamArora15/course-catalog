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
    this.getCategories();

    // Get all courses
    this.getCourses();
  }


  // get Filter courses after event
  filterCategoryCourse(value) {
    this.categoryForFilter = value;
    this.filter()
  }

  // get filter search keywords after event
  filterSearchCourse(value) {
    this.searchForFilter = value;
    this.filter()
  }


  // Final filters for display courses
  filter() {

    switch (this.searchForFilter, this.categoryForFilter) {
      case (this.searchForFilter && !this.categoryForFilter):
        console.log(this.searchForFilter, "1")
        break;
      case (!this.searchForFilter && this.categoryForFilter):
        console.log(this.categoryForFilter, "2")
        break;
      case (this.searchForFilter && this.categoryForFilter):
        console.log(this.searchForFilter, this.categoryForFilter, "3");
        break;
      default:
        break;
    }
  }

  getCategories() {
    this.course.getCategories().subscribe(data => {
      console.log(data);
    })
  }

  getCourses() {
    this.course.getCategories().subscribe(data => {
      console.log(data);
    })
  }

}
