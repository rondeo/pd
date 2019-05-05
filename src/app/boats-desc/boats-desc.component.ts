import { Component, OnInit} from '@angular/core';
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
  private last_id: string;
  private subscription: Subscription;
  boat={description:"suka"};

  constructor(private activateRoute: ActivatedRoute,private hp:HttpService) { 
    this.subscription = activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.newView();
    });
  }

  ngOnInit() {
    this.hp.getShips(this.id).subscribe((data)=>{
      this.boat=data[0];
      console.log(this.boat);
    });
     

  }
  
  


  newView(){
    this.hp.getShips(this.id).subscribe((data)=>{
      this.boat=data[0];
      });
  }
}
