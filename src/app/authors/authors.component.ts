import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  // templateUrl: './authors.component.html',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  isActive = true;

  onClicked() {
    this.isActive = !this.isActive;
  }
  
  casing="";

  onKeyUp() {
    console.log(this.casing)
  }
}
