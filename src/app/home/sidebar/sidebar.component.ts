import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() category = new EventEmitter();

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setCategory(category) {
    this.category.emit(category)
  }

  setSearchValue(value) {
    this.search.emit(value)
  }

}
