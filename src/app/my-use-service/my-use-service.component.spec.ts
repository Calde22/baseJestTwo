import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyUseServiceComponent } from './my-use-service.component';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'


import { WcmService } from '../services/wcm.service';

describe('MyUseServiceComponent', () => {
  let component: MyUseServiceComponent;
  let fixture: ComponentFixture<MyUseServiceComponent>;
  //Las variables
  let compiled: HTMLElement;
  let service_wcm: WcmService;
  let httpMock : HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyUseServiceComponent],
      imports: [HttpClientTestingModule],
      providers: [WcmService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyUseServiceComponent);
    component = fixture.componentInstance;
    service_wcm = TestBed.inject(WcmService)
    httpMock = TestBed.inject(HttpTestingController)
    
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('Esto es una foto como la ves 🖼️ snapshot', ()=>{
    //compiled.innerHTML
    expect(compiled).toMatchSnapshot()
  })

  it('Verificando el Loading.... ⏲️', ()=>{
    const h4 = compiled.querySelector('h4')
    expect(h4?.textContent).toContain('Que servicio tan lento Ome!!!')
  })

  it('Inyectar Data al servicio', () =>{
    const mockdata = {}
    const my_urService = "https://www.bancolombia.com/caass?current=true&urile=wcm:path:bancolombiapersonas/asTarjetadeCredito/contServFilterTdc&mime-type=application/json"
    const request = httpMock.expectOne(my_urService)

    expect(request.request.method).toBe('GET')
    request.flush(mockdata)

    fixture.detectChanges()

  })

});
