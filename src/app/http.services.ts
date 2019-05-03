import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Guest } from './guest';
  
@Injectable({
	providedIn: 'root'
})
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getNews.php?user='+param);
    }
    postData(param:Object){
        //const body={message:param.message,from:param.from};
        return this.http.post('http://server.std-763.ist.mospolytech.ru/GuestBook.php',param,{responseType:"text"});
    }
    getGuests(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getGuests.php?user='+param);
    }

    getShips(){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getShips.php?user=all');
    }
    getProfiles(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getProfiles.php?user='+param);
    }
}