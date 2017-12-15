import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'app-mathematics',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.css']
})
export class MathematicsComponent implements OnInit {

  private q_id: number;
  private username: string;
  private subject: string;
  private title: string;
  private time: string;
  private answer: string;
  //private answer2: string;
  
  private questionList: Question[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.onLoad()
  }

  onLoad() {
    this.postService.getAllPost().subscribe(res => {
      console.log(res)
      this.questionList = res
    })
  }

  onAdd(){
  }

  onDelete(title: string) {
    this.postService.testDelete(title).subscribe(res => {
      console.log(res)
    })
  }

}
interface Question{
  q_id: number;
  username: string;
  subject: string;
  title: string;
  time: string;
  answer1: string;
  answer2: string;
}
