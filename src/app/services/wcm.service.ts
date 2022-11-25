import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WcmTdc } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WcmService {


  constructor(private http: HttpClient) { }

  my_urService = "https://www.bancolombia.com/caass?current=true&urile=wcm:path:bancolombiapersonas/asTarjetadeCredito/contServFilterTdc&mime-type=application/json"

  getWcm(): Observable<WcmTdc> {
    return this.http.get<WcmTdc>(this.my_urService)
  }

}
