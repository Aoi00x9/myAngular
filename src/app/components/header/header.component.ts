import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router'; 
//import logo from '../img/logo.png'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  private isLogin;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  logOut() {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['home']);
  }

  logIn() {
    this.router.navigate(['login']);
  }

  register(){
    this.router.navigate(['register']);
  }
}

