import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from 'src/app/http.services';
@Component({
  selector: 'app-full-album',
  templateUrl: './full-album.component.html',
  styleUrls: ['./full-album.component.css']
})
export class FullAlbumComponent implements OnInit {
  private id: string;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private hp:HttpService) { 
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }
  ArrofObjects;
  Album="";
  album={album_id:"",album_name:"",link:""};
  ngOnInit() {
    console.log(this.id);
    // this.hp.getGalery(this.id).subscribe((data)=>{
    //   this.album=data[0];
    //   console.log(this.album);
    // })
    
    // this.hp.getGalery(this.id).subscribe((dat)=>{
    //   let count=dat.toString().split(",").length;
    //   for(let i=0;i<count;i++){
    //      this.ArrofObjects.push({});
    //   }
    //   for(let i=0;i<count;i++){
    //      this.ArrofObjects[i]=dat[i];
    //   }
    //   this.Album=this.ArrofObjects[0].album_name;
    // }); 
    this.getAlbum();
  }

  async getAlbum(){
    this.ArrofObjects=await this.hp.getGalery(this.id);
  }
}


