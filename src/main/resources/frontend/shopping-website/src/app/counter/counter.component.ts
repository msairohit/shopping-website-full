import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Vegetable } from '../vegetable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  @Input('parentData') parentData;
  id : number = 0;

  @Output() messageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    // console.log("count", this.count);
    // console.log("parent data quantity", this.parentData.quantity);
    if(this.count == undefined) {
      this.id = this.parentData.id;
      // console.log(this.parentData);
      this.count = this.parentData.quantity;
    }
    /* if(this.count != this.parentData.quantity) {
    } else {
      this.id = this.parentData.id;
      // console.log(this.parentData);
      this.count = this.parentData.quantity;
    } */
  }

  increment(data) {
    console.log({data});
    this.count+=0.25;
    console.log('increment called');
    this.messageEvent.emit(this.count);
  }

  decrement() {
    if (this.count > 0.26){
      this.count-=0.25;
      this.messageEvent.emit(this.count);
    }
  }

  keyPressed(event) {
    let val = (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    if (val)
      this.messageEvent.emit(this.count);
    return val;
  }

}
