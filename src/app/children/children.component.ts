import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent  {

 @Input() name: string;
  hidden = true;
 
 @Input() ok = 'OK';
 @Output() close = new EventEmitter<boolean>();

 constructor() {}
 
 show() {
   this.hidden = false;
 }
 
 hide() {
   this.hidden = true;
   this.close.emit(true);
 }

}