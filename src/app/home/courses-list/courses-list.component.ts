import { Component, OnInit, Input } from '@angular/core';
import { courses } from '../../models/course.model'
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() category : string;
  @Input() keyword : string;

  coursesList:any;

  constructor() {
    // Setting dummy courses list
    this.coursesList = courses;

  }

  ngOnInit(): void {
  }

}
