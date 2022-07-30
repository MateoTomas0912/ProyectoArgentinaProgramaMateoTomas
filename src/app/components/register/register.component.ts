import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  usuario = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router:Router){}

  Registrarse(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.register(email,password).then(user => {
      console.log("se registro ", user);
      this.router.navigate(['/login'])
    })
  }
}
