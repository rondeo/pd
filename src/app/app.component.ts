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
}
}
