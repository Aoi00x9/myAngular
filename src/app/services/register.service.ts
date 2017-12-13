import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RegisterService {


  constructor(private http: Http) {
  }
  addUsers(username: string, password: string, email: string) {

    const data = {
      username: username,
      password: password,
      email: email
    }
    return this.http.post('api/add', data).map(res => res.json().message)
  }

}
