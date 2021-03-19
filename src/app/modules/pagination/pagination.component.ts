import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() handleChangePage: EventEmitter<number> = new EventEmitter();
  @Input() pagesList: number[] = [];
  @Input() activePage = 1;
  paginationList: (number|null)[] = [];
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges({pagesList, activePage}: SimpleChanges): void {
    if (
      pagesList?.currentValue !== pagesList?.previousValue &&
      activePage?.currentValue !== activePage?.previousValue
    ) {
      this.generatePaginationList();
    }

  }


  generatePaginationList(): void {
    if (this.activePage - 2 <= 0) {
      this.paginationList.push(...[1, 2]);
    }

    if (this.activePage >= 5) {
      this.paginationList.push(...[1, null]);
    }

    if (this.activePage - 2 > 0) {
      this.paginationList.push(...[this.activePage - 2, this.activePage - 1]);
    }
  }


  handleClick(event: number): void {
    this.handleChangePage.emit(event);
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
