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
  boat;

  constructor(private activateRoute: ActivatedRoute,private hp:HttpService) { 
    this.subscription = activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      console.log(this.id);
      this.newView();
    });
  }

  ngOnInit() {
  
  }
  
  


  async newView(){
    // this.hp.getShips(this.id).subscribe((data)=>{
    //   this.boat=data[0];
    //   });
    this.boat= await this.hp.getShips(this.id);
    this.boat=this.boat[0].description;
   // console.log(this.boat);

  }
}
