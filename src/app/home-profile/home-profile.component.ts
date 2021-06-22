import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css']
})
export class HomeProfileComponent implements OnInit {

  year = this.route.snapshot.paramMap.get('year');
  month = this.route.snapshot.paramMap.get('month');

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    viewAll() {
      this.router.navigate(['/']);
    }
    
  ngOnInit() {
  }

}
