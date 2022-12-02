import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListDataComponent } from './list-data.component';

import {DatosLista} from '../interfaces'

describe('ListDataComponent', () => {
  let component: ListDataComponent;
  let fixture: ComponentFixture<ListDataComponent>;
  let compiled: HTMLElement

  const datos_mock: DatosLista[] = [
    {titulo:"Numero Uno", name:"UNO", edad:14} as DatosLista,
    {titulo:"Numero Dos", name:"DOS", edad:15} as DatosLista,
    {titulo:"Numero Tres", name:"TRES", edad:16} as DatosLista
  ]
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement 
    component.lista = datos_mock
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("El titulo si es Lista de datos", ()=>{
    const tituloElemto = fixture.debugElement.queryAll(By.css("h1"))
    let figure = compiled.innerHTML
    expect(tituloElemto.length).toBe(1)
    expect(tituloElemto[0].nativeElement.innerHTML).toBe("Lista Datos")
  })

  it("El reden de dato....", ()=>{
    const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
    console.log(compiled.innerHTML)
    expect(movieElements.length).toBe(datos_mock.length);
  })

});
