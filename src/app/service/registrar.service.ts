import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http:HttpClient ) { }

  registrar(customer:Customer):Observable<any>{
    let url="http://localhost:8000/register";
    return this.http.post(url,customer);
  }
}
