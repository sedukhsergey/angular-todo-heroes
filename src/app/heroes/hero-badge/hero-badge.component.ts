import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  styleUrls: ['./hero-badge.component.css']
})
export class HeroBadgeComponent implements OnInit {
@Input() name?: string;
@Input() id?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
