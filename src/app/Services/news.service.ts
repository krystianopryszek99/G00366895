import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  //service written
  GetNewsData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27');
  }

  GetSearchData(title:string):Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s='+title);
  }



}
