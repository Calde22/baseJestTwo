import { Component, OnInit } from '@angular/core';
import { WcmTdc } from '../interfaces';
import { WcmService } from '../services/wcm.service';

@Component({
  selector: 'app-my-use-service',
  templateUrl: './my-use-service.component.html',
  styleUrls: ['./my-use-service.component.scss']
})
export class MyUseServiceComponent implements OnInit {

  public wcm_data?: WcmTdc

  constructor(private wcm_service: WcmService) { }

  ngOnInit(): void {
    this.wcm_service.getWcm().subscribe( get_wcm_data =>{
      this.wcm_data = get_wcm_data
      console.log(get_wcm_data)
    })
  }

}
