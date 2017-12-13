import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private isEditable: boolean = true;
  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];
  private photoList: Photo[];

  constructor(private getphotoService: GetphotoService) {

  }

  ngOnInit() {
    this.my_name = "Rungruangsap Sukprung"
    this.age = 20;
    this.email = "aha@gmail.com";
    this.address = {
      street: "555 Bangkhunthian Jomthong",
      city: "Jomthong",
      province: "Bangkok",
      postcode: "10150"
    }
    this.skills = ["Sleep all day", "Play with cats"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(9,4990);
    })
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false; // add for do not want refresh page
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }
  toggleEdit() {
    this.isEditable = !this.isEditable;
  }
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
