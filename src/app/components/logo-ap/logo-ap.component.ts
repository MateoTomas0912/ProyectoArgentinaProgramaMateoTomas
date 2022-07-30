import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  userLogged = this.authService.getUserLogged();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  logout(){
    this.authService.logout();
    
  }
}
