import { Component, OnInit } from '@angular/core';
import{HttpService} from 'src/app/http.services';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private hp:HttpService) { }

  ArrofObjects;
  object={id:"",album:"",link:""};

  ngOnInit() {
    // this.hp.getGalery("all").subscribe((dat)=>{
    //   let count=dat.toString().split(",").length;
    //   for(let i=0;i<count;i++){
    //      this.ArrofObjects.push({});
    //   }
    //   for(let i=0;i<count;i++){
    //      this.ArrofObjects[i]=dat[i];
    //   }
      

       
    //    console.log(this.ArrofObjects);
    //  });
    this.getGallery();
    
  }

  async getGallery(){
    this.ArrofObjects= await this.hp.getGalery("all");
  }

}
