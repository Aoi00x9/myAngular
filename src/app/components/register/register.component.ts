import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private username: string;
  private password: string;
  private email: string;
  private result_text: string;

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit() {
  }



  onAdd(){
    this.registerService.addUsers(this.username,this.password,this.email).subscribe(res => {

      console.log(res)
      this.router.navigate(['./'])
    })
  }

}
