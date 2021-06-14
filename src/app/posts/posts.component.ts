import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts: any;
  private url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }

  //SOLUTION:
  /*

  ------- github-folloewrs.service.ts ---------
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http) 
  }

  ------- github-folloewrs.component.ts ---------
  followers: any;

  constructor(service: GithubFollowersService) { }
  ngOnInit() {
    this.service.getAll()
      .subscribe(folloewrs => this.followers = followers)
  }

  --------------- app.module.ts ----------------
   providers:
    GithubFollowersService

  ------- github-followers.component.html ---------
  //use media in bootstrap
  <div class="media">
    <div class="media-left">
      <a href="{{}}"></a>
    </div>
    <div class="media-body">
      <h4 class="media-heading"></h4>
    </div>
  </div>

  */
  
}
