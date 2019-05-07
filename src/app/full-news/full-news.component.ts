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
  news={user:"",title:"",description:"",vc:"",enabled:"",date:""};
  htmlData:any;
  constructor(private activateRoute: ActivatedRoute,private hp:HttpService,private sanitizer: DomSanitizer) { 
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.hp.getData(this.id).subscribe((data)=>{
      this.news=data[0];
      this.htmlData= this.sanitizer.bypassSecurityTrustHtml(this.news.description);
    })


  }


  

}
