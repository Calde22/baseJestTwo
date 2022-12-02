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
    this.getData()
  }

  private getData():void {
    this.service.getCharacter()
    .subscribe((data: characterResult) => {
      console.log(data.result[0].description);
      this.data = data.result;
      this.dataFilter = data.result;
    })
  }


  public applyFilter(e:eventTag):void {
    e.active ?  this.filters.push(e.title) : this.filters.splice(this.filters.indexOf(e.title), 1)
    this.dataFilter = this.data.filter((item)=> 
    (this.filters.find((e) => item.skills.indexOf(e) != -1)))
    if (this.filters.length == 0) this.dataFilter = this.data
      
  }
 

}
