import { Component, OnInit,Input } from '@angular/core';
import { skill } from 'src/app/interfaces';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title:string = '';
  @Input() description:string|undefined = '';
  @Input() state:boolean = true;
  @Input() skills:string[] = [];
  @Input() img:string = 'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
