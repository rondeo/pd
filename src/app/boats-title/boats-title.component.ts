import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.services';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-boats-title',
  templateUrl: './boats-title.component.html',
  styleUrls: ['./boats-title.component.css']
})
export class BoatsTitleComponent implements OnInit {
  ArrofObjects;
  private id: string;
  private subscription: Subscription;
  constructor(private hp:HttpService) { 
   
  }

  ngOnInit() {
    // this.hp.getShips("all").subscribe((data)=>{
    //   let count=data.toString().split(",").length;
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects.push({});
    //    }
    //    for(let i=0;i<count;i++){
    //       this.ArrofObjects[i]=data[i];
    //    }
       
    //   });
    this.getShips();
  }

  async getShips(){
    this.ArrofObjects=await this.hp.getShips("all");
  }
  
  }
  

