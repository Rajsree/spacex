import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100";

  constructor(private httpClient: HttpClient) { }

  public get(){
		return this.httpClient.get(this.SERVER_URL);
	}
}
