import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  addPost(username: string, subject: string, title: string, date: string) {
    const data = {
      username: username,
      subject: subject,
      title: title,
      date: date
    }
    return this.http.post('api.question/add', data).map(res => res.json().message)
  }

  addAnswer(username: string, subject: string, title: string, date: string, answer:string){
    const data = {
      username: username,
      subject: subject,
      title: title,
      date: date,
      answer: answer
    }
    return this.http.post('api.answer/add', data).map(res => res.json().message)
  }
  getAnsBio(title:string){
    return this.http.get('api.answer/show/ans/' + title).map((res) => res.json().message);
  }

  getAllPost() {
    return this.http.get('api.question/show').map((res) => res.json().message);
  }

  getAllBio(){
    return this.http.get('api.question/show/biology').map((res) => res.json().message);
  }

  testDelete(title: string) {
    return this.http.delete('/api.question/delete/' + title).map(res => res.json().message)
  }

}
