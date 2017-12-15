import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PostService } from '../../../services/post.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-biology',
  templateUrl: './biology.component.html',
  styleUrls: ['./biology.component.css']
})
export class BiologyComponent implements OnInit {

  public modalRef: BsModalRef
  private questionList: Question[]
  private answerList: Answer[]
  private username: string
  private subject: string
  private title: string
  private answer: string
  private date

  constructor(
    private postService: PostService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.date = new Date()
    this.subject = 'biology'
    this.getBioPost()
  }


  askQuestion() {
    //this.username = user ที่ login อยุ่
    this.date = new Date()
    const d = this.date.toLocaleString()
    this.postService.addPost(this.username, this.subject, this.title, d).subscribe((res) => {
      console.log(res)
      this.modalRef.hide()
      this.getBioPost()
    })
  }

  addAns(title){
    this.date = new Date()
    const d = this.date.toLocaleString()
    this.postService.addAnswer(this.username, this.subject, this.title, d, this.answer).subscribe((res) => {
      console.log(res)
      this.getAns(this.title)
    })
  }

  getBioPost() {
    this.postService.getAllBio().subscribe(res => {
      this.questionList = res
      console.log(res)
    })
  }
  getAns(title:string){
    this.postService.getAnsBio(title).subscribe(res => {
      console.log(res)
      this.getBioPost()
    })
  }

  public openModal(template,title) {
    this.modalRef = this.modalService.show(template);
    this.title = title
  }

}
interface Question {
  q_id:string
  username:string
  subject:string
  title:string
  date:string
}
interface Answer{

  username:string
  subject:string
  title:string
  date:string
}