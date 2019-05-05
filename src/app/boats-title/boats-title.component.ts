import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.services';

@Component({
  selector: 'app-boats-title',
  templateUrl: './boats-title.component.html',
  styleUrls: ['./boats-title.component.css']
})
export class BoatsTitleComponent implements OnInit {
  ArrofObjects=[];
  constructor(private hp:HttpService) { }

  ngOnInit() {
    this.hp.getShips().subscribe((data)=>{
      let count=data.toString().split(",").length;

      if(count>0){
      //  for(let i=0;i<count;i++){
      //     this.ArrofObjects.push({});
      //  }
       for(let i=0;i<count;i++){
          this.ArrofObjects[i]=data[i];
       }
      }
    });
  }
  
}
