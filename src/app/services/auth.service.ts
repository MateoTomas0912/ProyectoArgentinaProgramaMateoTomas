import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router:Router) { }

  async register(email:string , password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch(err){
      console.log("error en login ", err);
      return null;
    }
  }

  async login(email:string , password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch(err){
      console.log("error en login ", err);
      return null;
    }
  }

  async loginWithGoogle(email:string, password:string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch(err){
      console.log("error en login con google", err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
    this.router.navigate(['/login'])
    console.log("se ha deslogeado el usuario");
  }
}
