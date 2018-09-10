import { Injectable } from '@angular/core';
import { News } from '../app/news.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNewsData()
  {
 
    return this.http.get<News[]>("http://localhost:52870/api/GetHaberleriGetir");
  }
  getNewsDataItem(id:number)
  {
    return this.http.get<News>("http://localhost:52870/api/GetHaberIcerikGetir/"+id);
  }
}
