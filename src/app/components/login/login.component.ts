import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usuario = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router:Router){}

  Ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email,password).then(user => {
      console.log("se registro ", user);
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
      this.router.navigate(['/'])
    })
  }

  IngresarConGoogle(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email,password).then(user => {
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
      this.router.navigate(['/'])
    })
  }

  logout(){
    this.authService.logout();
  }
}
