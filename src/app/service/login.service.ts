import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

    }

    login(user:string, password:string): Observable<any>{
      let url="http://localhost:8000/auth";
      let params=new HttpParams();
      params=params.append("user",user);
      params=params.append("password",password);
      return this.http.get(url,{params:params});
  }
}
