import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Guest } from './guest';
  
@Injectable({
	providedIn: 'root'
})
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getNews.php?user='+param).toPromise();
    }
    postData(param:Object){
        //const body={message:param.message,from:param.from};
        return this.http.post('http://server.std-763.ist.mospolytech.ru/GuestBook.php',param,{responseType:"text"}).toPromise();
    }
    getGuests(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getGuests.php?user='+param).toPromise();
    }

    getShips(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getShips.php?user='+param).toPromise();
    }
    getProfiles(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getProfiles.php?user='+param).toPromise();
    }
    getGalery(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getGallery.php?user='+param).toPromise();
    }
}