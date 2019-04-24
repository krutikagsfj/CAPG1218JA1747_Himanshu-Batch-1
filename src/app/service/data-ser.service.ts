import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSerService {

  constructor(private http:HttpClient) { }
  getMobileData()
  {
    return this.http.get("/assets/mydata.json");
  }
}
