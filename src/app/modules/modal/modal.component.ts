import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() onClose: () => void;
  body: HTMLBodyElement | null = null;

  constructor() { }
  ngOnInit(): void {
    this.body =  document.querySelector('body');
    if (this.body) {
      console.log('init body')
      this.body.style.cssText = 'overflow: hidden; position: fixed;';
    }
  }

  ngOnDestroy(): void {
    if (this.body) {
      console.log('destroy body',)
      this.body.style.cssText = 'overflow: auto; position: static;';
    }
  }

}




