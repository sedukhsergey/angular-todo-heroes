import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() onClose: () => void;
  fadeType: string | null = null;
  text = 'some text';
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => this.handleChangeFadeType('in'), 0);
  }

  handleChangeFadeType(type: string): void {
    this.fadeType = type;
  }

  handleClose = () => {
    this.fadeType = 'out';
  };

  transitionEnd(e: any): any {
    console.log('e',e)
    if (e.propertyName !== 'opacity' || this.fadeType === 'in') return;

    if (this.fadeType === 'out') {
      this.onClose();
    }
  };

}
