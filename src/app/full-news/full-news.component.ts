import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/http.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent implements OnInit {
  private id: string;
  private subscription: Subscription;
  //news={user:"",title:"",description:"",vc:"",enabled:"",date:""};
  news;
  htmlData:any;
  constructor(private activateRoute: ActivatedRoute,private hp:HttpService,private sanitizer: DomSanitizer) { 
    this.subscription = activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.getNews();

    });
  }

  ngOnInit() {
    
  }

  async getNews(){
    this.news=await this.hp.getData(this.id);
   
    console.log(this.news);
   
    this.htmlData= this.sanitizer.bypassSecurityTrustHtml(this.news[0].description);
  }


  

}
