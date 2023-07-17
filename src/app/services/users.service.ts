import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkFlowInterface } from 'data-types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/workFlowData';
  constructor(private http: HttpClient
    ) { }

    getWorkById(workId: number) {
      return this.http.get<WorkFlowInterface>(`${this.apiUrl}/${workId}`);
    }
  ​
    //  This method retrieves all the work categories from the db.json file.
    getAllWorks() {
      return this.http.get<WorkFlowInterface[]>(this.apiUrl);
    }
  ​
    //  This method sends the form data to the db.json file.
    sendData(formData: any) {
      return this.http.post<WorkFlowInterface>(this.apiUrl, formData);
    }
  }
