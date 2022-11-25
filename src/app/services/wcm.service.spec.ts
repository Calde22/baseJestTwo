import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WcmService } from './wcm.service';

describe('WcmService', () => {
  let service: WcmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(WcmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Vamos a ver si TDC", (done) =>{
    service.getWcm().subscribe( wcm_data =>{
      expect(wcm_data.Menutarjetas[0]).toBeTruthy()
      done()
    } )
  })

});
