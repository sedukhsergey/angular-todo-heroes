import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-resize-value',
  templateUrl: './resize-value.component.html',
  styleUrls: ['./resize-value.component.css']
})
export class ResizeValueComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
