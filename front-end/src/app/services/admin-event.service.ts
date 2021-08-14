import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminEventService {

  constructor(private http:HttpClient) { }

  addEvent(data) {
    return this.http.post<any>('http://localhost:8090/add-Event', data);
  }

  getEvent() {
    return this.http.get<any>('http://localhost:8090/retrieve-all-Events');
  }
}

