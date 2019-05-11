import { Component, OnInit,HostListener } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{HttpService} from 'src/app/http.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient,private hp:HttpService,private sanitizer: DomSanitizer){}
  title = 'GGPD';
  ArrofObjects;
  object={user:"",title:"",description:"",vc:"",enabled:"",date:""};
  howMuchNews=20;
  one=0;
  scrollingOften=1000;
  ngOnInit(){
    this.getNews(this.howMuchNews);
    }

    async getNews(param:number){
      this.ArrofObjects=await this.hp.getData("allp&max="+param);
      for (const obj of this.ArrofObjects) {
        obj.description=this.sanitizer.bypassSecurityTrustHtml(obj.description.substring(0,400));
      }
    }

    onScroll(){
      console.log("scrollingg!!");
    }

    @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
    
      let two=window.pageYOffset;
      if((document.documentElement.scrollHeight-two)<800){
        this.howMuchNews+=20;
        this.getNews(this.howMuchNews);
        this.one+=this.scrollingOften;
      }
    }
}
