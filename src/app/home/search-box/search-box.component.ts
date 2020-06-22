import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {


  @Output() searchValue = new EventEmitter();

  public search:any;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event) {
    this.searchValue.emit(event.target.value);
  }

}
