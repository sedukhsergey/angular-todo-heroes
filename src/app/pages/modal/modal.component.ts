import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isOpen = false;
  constructor() { }

  modalClose(): void {
    this.isOpen = false;
  }
  modalOpen(): void {
    this.isOpen = true;
  }

  ngOnInit(): void {
  }

}
