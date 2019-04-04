import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {
  imgUrls:any = [];
  queryText:string;
  pageNo:number;
  pageSet:boolean;
  constructor(private auth: AuthService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.loaderService.display(true);
      this.pageSet = false;
      this.searchImage(params.get('query'),1);
    });
  }
  
  searchImage(img, pageNo){
    this.queryText = img;
    this.pageNo = pageNo;
    this.auth.getImages(img, pageNo.toString()).subscribe(res=>{
        this.imgUrls = this.imgUrls.concat(res['results']);
        this.loaderService.display(false);
        this.pageSet = true;
      });
  }

  onScroll(){
    this.pageNo++;
    this.pageSet = false;
    this.searchImage(this.queryText, this.pageNo)
  }

  goToUser(link){
    let temp = (link.user.links.self).split('/');
    this.router.navigate(['user/'+temp[temp.length-1]])
  }

}
