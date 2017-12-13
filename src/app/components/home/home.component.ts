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
  private answerList: Answer[]
  public modalRef: BsModalRef


  constructor(private postService: PostService, private modalService: BsModalService) { }
  
  public openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  

  ngOnInit() {
    this.getAllTitle()
  }

  isAnswer(answer) {
    this.postService.addPost(answer).subscribe((res) => {
      console.log(res)
      this.getAllTitle()
    })
  }

  getAllTitle() {
    this.postService.getAllPost().subscribe(res => {
      this.answerList = res
      console.log(res)
    })
  }



}

interface Answer {
  post_id: number
  post_user: string
  title: string
}

