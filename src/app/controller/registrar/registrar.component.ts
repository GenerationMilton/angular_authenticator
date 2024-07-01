import { Component } from '@angular/core';
import { Customer } from '../../model/Customer';
import { RegistrarService } from '../../service/registrar.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  customer:Customer= new Customer();
  constructor(private registrarService:RegistrarService){

  }

  register(){
    this.registrarService.registrar(this.customer).subscribe({
      next:data=>alert("User registered!"),
      error:err=>("user exist, can't be register!")
    })
  }

}
