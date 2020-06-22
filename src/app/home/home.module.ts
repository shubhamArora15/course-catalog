import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';


@NgModule({
  declarations: [HomeComponent, SidebarComponent, SearchBoxComponent, CoursesListComponent, CoursesCategoriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
