import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }

  onUpdateButtonClick(): void {
    this.selectClick.emit(true);
  }

  onDeleteButtonClick(): void {
    this.selectClick.emit(true);
  }

}