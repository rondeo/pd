import { Component, OnInit } from '@angular/core';
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
  ngOnInit(){
          
    //  this.hp.getData("all").subscribe((dat)=>{
    //    let count=dat.toString().split(",").length;
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects.push({});
    //    }
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects[i]=dat[i];
    //    }
    //    for(let i=0;i<count;i++){
    //     this.ArrofObjects[i].description=this.sanitizer.bypassSecurityTrustHtml(this.ArrofObjects[i].description.substring(0,400));
    //    }
    //   });
    this.getNews();
    }

    async getNews(){
      this.ArrofObjects=await this.hp.getData("all");
      for (const obj of this.ArrofObjects) {
        obj.description=this.sanitizer.bypassSecurityTrustHtml(obj.description.substring(0,400));
      }
    }
}
