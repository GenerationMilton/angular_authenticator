
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/Customer';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  password:string;
  customer:Customer;
  constructor(private loginService:LoginService) { }

  login(){
    this.loginService.login(this.user,this.password).subscribe(c=>{
      this.customer=c;
      if(this.customer!=null){

        alert("login success");
      }else{
        alert("login failure");
      }
    });
  }

  ngOnInit(): void {
  }

}
