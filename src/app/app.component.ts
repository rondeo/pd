import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{HttpService} from 'src/app/http.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient,private hp:HttpService){}
  title = 'GGPD';
  ArrofObjects=[];
  object={user:"",title:"",description:"",vc:"",enabled:"",date:""};

  ngOnInit(){
          
     //this.http.get('http://server.std-763.ist.mospolytech.ru/getNews.php',{responseType:'text'}).subscribe(data=>console.log(data));
    //  this.hp.getData("all").subscribe((dat)=>{
    //    let count=dat.toString().split(",").length;
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects.push({});
    //    }
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects[i]=dat[i];
    //    }
        
    //     console.log(this.ArrofObjects);
    //   });
}
}
