import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/http.services';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent implements OnInit {
  private id: string;
  private subscription: Subscription;
  news={user:"",title:"",description:"",vc:"",enabled:"",date:""};
  constructor(private activateRoute: ActivatedRoute,private hp:HttpService) { 
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.hp.getData(this.id).subscribe((data)=>{
      this.news=data[0];
    })
  }

}
