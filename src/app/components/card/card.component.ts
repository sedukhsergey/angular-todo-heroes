import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @ContentChild(TemplateRef) cardTemplateRef: TemplateRef<any>;
 @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
