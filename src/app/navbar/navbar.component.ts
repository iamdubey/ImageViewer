import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  queryText:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchImage(query){
    this.router.navigate(['/'+query.queryText]);
  }
}
