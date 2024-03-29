import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderService } from 'src/app/servicios/header.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public usuario:Usuario | undefined;
  public editUsuario: Usuario | undefined;
  userLogged = this.authService.getUserLogged();

  constructor(private headerService : HeaderService, private authService:AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }


  public getUser():void{
    this.headerService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }

  public onOpenModal(mode:String, usuario?:Usuario):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');
    if(mode === 'edit'){
      this.editUsuario=usuario;
      button.setAttribute('data-bs-target','#editUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdateUsuario(usuario:Usuario){
    this.editUsuario = usuario;
    document.getElementById('add-usuario-form')?.click();
    this.headerService.updateUsuario(usuario).subscribe({
      next: (response:Usuario)=>{
        console.log(response);
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
