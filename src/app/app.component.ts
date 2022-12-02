import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import {characterResult, character, eventTag} from './interfaces'
import { _skills } from './_mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baseJestTwo';
  skills = _skills;
  dataFilter:character[] = [];
  data:character[] = [];
  filters:string[] = [];

  constructor(private service: DataService){
 
  }

  private getData():void {
    
  }


  public applyFilter(e:eventTag):void {
      
  }
 

}
