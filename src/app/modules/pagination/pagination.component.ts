import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() handleChangePage: EventEmitter<number> = new EventEmitter();
  @Input() pagesList: (number|null)[] = [];
  @Input() paginationList: (number|null)[] = [];
  @Input() activePage = 1;
  constructor(
  ) { }

  ngOnInit(): void {
  }


  handleClick(event: number|null): void {
    if (event !== null) {
      this.handleChangePage.emit(event);
    }
  }

  handlePrev(): void {
    if (this.activePage <= 1) {
      return;
    }
    this.handleChangePage.emit(this.activePage - 1);
  }

  handleNext(): void {
    if (this.activePage >= this.pagesList.length) {
      return;
    }
    this.handleChangePage.emit(this.activePage + 1);
  }

}
