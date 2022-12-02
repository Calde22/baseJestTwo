import { Component, OnInit } from '@angular/core';
import { DatosLista } from '../interfaces'; 

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {


  lista: DatosLista[] = [
    {titulo: "Hola", name:"Mundo Uno"},
    {titulo: "Mundo", name:"Mundo Dos"},
    {titulo: "Como vamos", name:"Mundo tres"},
  ];

  constructor() { }
  ngOnInit(): void {

  }
}
