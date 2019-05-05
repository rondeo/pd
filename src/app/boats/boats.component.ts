import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.services';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  ArrofObjects=[];
  object={name:"",create_at:"",start_using_date:"",end_using_date:"",description:"",specification:""};
  constructor(private hp:HttpService) { }


  ngOnInit() {
    // this.hp.getShips().subscribe(data=>console.log(data));
    // this.ArrofObjects=[];
    this.hp.getShips().subscribe((data)=>{
      let count=data.toString().split(",").length;
      if(count>0){
       for(let i=0;i<count;i++){
          this.ArrofObjects.push({});
       }
       for(let i=0;i<count;i++){
          this.ArrofObjects[i]=data[i];
       }
      }
    });
    
  }

}
