import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  uname:string;
  udata :any ={};
  temp:any;
  constructor(private route:ActivatedRoute,
    private auth:AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.uname = params.get('uname');
      this.getUserData(this.uname);
    });
  }

  getUserData(uname){
    this.auth.getUserData(uname).subscribe(res=>{
      this.temp = res;
      this.udata['profile_image'] = res[0]['user']['profile_image']['large'];
      this.udata['name'] = res[0]['user']['first_name'] + ' ' + res[0]['user']['last_name'];
    });
  }
}
