import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Output() newInputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public notifySubmitClick(input: string) {
    this.newInputEvent.emit(input);    
  }

}
