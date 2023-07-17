import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { request } from 'data-types';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:3000/request';

  constructor(
    private http: HttpClient
  ) { }

  getWorkById(workId: number) {

    return this.http.get<request>(`${this.apiUrl}/${workId}`);
  }

  //  This method retrieves all the work categories from the db.json file.
  getAllWorks() {
    return this.http.get<request[]>(this.apiUrl);
  }

  //  This method sends the form data to the db.json file.
  // sendData(formData: any) {
  //   return this.http.post<personal>(this.apiUrl, formData);
  // }
}
