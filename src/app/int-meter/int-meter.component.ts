import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-int-meter',
  templateUrl: './int-meter.component.html',
  styleUrl: './int-meter.component.scss'
})
export class IntMeterComponent {
  @Input()
  number:number = 0;
  @Output()
  numberChange: EventEmitter<number> = new EventEmitter<number>();
  add(){
    this.number++;
    this.numberChange.emit(this.number);
  }
  remove(){
    if(this.number>0){
      this.number--;
      this.numberChange.emit(this.number);
    }
  }
}
