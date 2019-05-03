import { Component, OnInit } from '@angular/core';
import{HttpService} from 'src/app/http.services';
@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  constructor(private hp:HttpService) { }
  ArrofObjects=[];
  profile={id:"",first_name:"",last_name:"",last_name_eng:"",patronymic:"",birthday:"",grade:"",profession:"",voyage:"",start_of_work:"",end_of_work:""};
  ngOnInit() {
    this.hp.getProfiles("all").subscribe((dat)=>{
      
      let count=dat.toString().split(",").length;
      for(let i=0;i<count;i++){
         this.ArrofObjects.push({});
      }
      for(let i=0;i<count;i++){
         this.ArrofObjects[i]=dat[i];
      }
      for(let i=0;i<count;i++){
        switch(this.ArrofObjects[i].voyage){
          case "1":
            this.ArrofObjects[i].voyage="Майор";
            break;
          case "2":
            this.ArrofObjects[i].voyage="Подполковник";
            break;
          case "3":
            this.ArrofObjects[i].voyage="Полковник";
            break;
          case "3":
            this.ArrofObjects[i].voyage="Генерал";
            break;
        }
     }
      
      console.log(this.ArrofObjects);
       
       
     });
  }

}
