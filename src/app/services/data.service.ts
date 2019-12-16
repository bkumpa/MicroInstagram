import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url=`https://jsonplaceholder.typicode.com`;
  photos:any[];

  constructor(private http:HttpClient) { }

  getAllPhotos(){
    const resultData=this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`);
    return resultData;
  
    
  }

}
