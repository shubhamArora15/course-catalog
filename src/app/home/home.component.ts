import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {


  constructor(private course: HomeService) {

  }

  ngOnInit(): void {
    // Get all categories 
    this.getCategories();

    // Get all courses
    this.getCourses();
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
