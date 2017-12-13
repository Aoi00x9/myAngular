import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  addPost(title:string){
    const data = {
      title : title
    }
    return this.http.post('api.post/add', data).map(res => res.json().message)
  }

  getAllPost(){
    return this.http.get('api.question/show').map((res) => res.json().message);
  }

  testAdd(q_id:number, username:string, subject:string, title:string, time:string){
    const data = {
      q_id : q_id,
      username : username,
      subject : subject,
      title : title,
      time : time
    }
    return this.http.post('api.question/add', data).map((res) => res.json().message);
  }

  testUpdate(q_id, answer){
    const data = {
      answer : answer
    }

    return this.http.put('api.question/' + q_id, answer).map((res) => res.json().message)
  }

    testDelete(title:string){
      return this.http.delete('/api.question/delete/' + title).map(res=>res.json().message)
    }

}
