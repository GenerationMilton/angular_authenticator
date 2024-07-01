import { Component } from '@angular/core';
import { Customer } from '../../model/Customer';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:string;
  password:string;
  customer:Customer;
  constructor(private loginService: LoginService){

  }

  login(){
    this.loginService.login(this.user, this.password).subscribe(data=>{
      this.customer=data;
      if(this.customer!=null){ //usuario valido
        alert("Usuario autenticado");
      }else{
        alert("usuario no autenticado");
      }
    });


  }
}
