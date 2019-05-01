import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable({
	providedIn: 'root'
})
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(param:string){
        return this.http.get('http://server.std-763.ist.mospolytech.ru/getNews.php?user='+param);
    }
}