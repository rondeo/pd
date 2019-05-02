import { Component, OnInit } from '@angular/core';
import{HttpService} from 'src/app/http.services';
import{Router} from '@angular/router';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {

  constructor(private hp:HttpService,private router: Router) { }
  from="";
  message="";
  ArrofObjects=[];
  object={nickname:"",comment:"",publication_date:"",enabled:""};
  ngOnInit() {
    this.getGuestBook();
  }

  publish(){
    this.hp.postData({message:this.message,from:this.from}).subscribe(data=>console.log(data));
    this.getGuestBook();
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/guestbook"]));    
  }
  

  getGuestBook(){
    this.ArrofObjects=[];
    this.hp.getGuests("all").subscribe((data)=>{
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
