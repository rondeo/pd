import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/http.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-boats-desc',
  templateUrl: './boats-desc.component.html',
  styleUrls: ['./boats-desc.component.css']
})
export class BoatsDescComponent implements OnInit {
  ArrofObjects=[];

  private id: string;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute,private hp:HttpService) { 
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.hp.getShips().subscribe((data)=>{
      let count=data.toString().split(",").length;
      if(count>0){
         for(let i=0;i<count;i++){
          this.ArrofObjects[i]=data[i];
          this.ArrofObjects[i].description=this.ArrofObjects[i].description.substring(0,400);
         }
      }
    });
  }
}
