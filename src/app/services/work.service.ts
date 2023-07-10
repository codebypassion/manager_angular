import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { location, work, work_app } from 'data-types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private apiUrl = 'http://localhost:3000/work';
  private apiUrlForWorkApp = 'http://localhost:3000/work_app';

  constructor(private http:HttpClient) { }
  getWork(){
    return this.http.get<work[]>('http://localhost:3000/work');
    // console.warn(data)
  }

  getWorkApplication(){
    return this.http.get<work_app[]>('http://localhost:3000/work_app');
    // console.warn(Data);
  }

  getWorkById(id: number): Observable<work> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<work>(url);
  }

  
  getlocationById(){
    return this.http.get<location[]>('http://localhost:3000/location');
  }
  }

