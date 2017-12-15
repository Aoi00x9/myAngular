import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  
]
})
export class HomeComponent implements OnInit {
  public modalRef: BsModalRef
  private answerList: Answer[]
  private questionList: Question[]
  private username:string
  private subject:string
  private title:string
  private date
 

  constructor(private postService: PostService, private modalService: BsModalService) { }
  
  public openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getAllPost()
  }

  /*isAnswer() {
    this.postService.addPost().subscribe((res) => {
      console.log(res)
      this.getAllTitle()
    })
  }*/
  askQuestion(){
    this.postService.addPost(this.username, this.subject, this.title, this.date).subscribe((res) => {
      console.log(res)
      this.getAllPost()
    })
  }

  getAllPost() {
    this.postService.getAllPost().subscribe(res => {
      this.questionList = res
      console.log(res)
    })
  }



}

interface Answer {
  post_id: number
  post_user: string
  title: string
}

interface Question {
  username:string
  subject:string
  title:string
  date:string
}

