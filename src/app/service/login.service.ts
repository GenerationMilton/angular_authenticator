import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(user:string, password:string):Observable<any>{
    let url:string="http://localhost:8000/auth";
    //let heads=new HttpHeaders();
    //heads.set('Content-Type','application/x-www-form-urlencoded');
    let params=new HttpParams();
    params=params.append("user",user);
    params=params.append("password",password);
    return this.http.get(url,{params:params});
  }
}
