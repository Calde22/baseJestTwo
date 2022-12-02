import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { eventTag } from 'src/app/interfaces';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Output() change = new EventEmitter<eventTag>();
  @Input() index:number = 0;
  @Input() title:string = '';
  active = false;
  constructor() { }
  ngOnInit(): void {
  }

  onChange (e:string):void{
    this.active =!this.active;
    this.change.emit({
      index:this.index,
      title:e,
      active:this.active
    });
  }
}
