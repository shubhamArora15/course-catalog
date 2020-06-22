import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { courses } from '../models/course.model'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private categories_url = "https://frontend-hiring.appspot.com/all_categories";
  private courses_url = "https://frontend-hiring.appspot.com/all_courses";

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get(this.categories_url);
  }
}
