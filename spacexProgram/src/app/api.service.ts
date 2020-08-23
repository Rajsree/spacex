import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

// private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100";
//   setGroupFilter$ = new Subject<any>();
//   	getGroupFilter = this.setGroupFilter$.asObservable();
//   	constructor(private httpClient: HttpClient) {}
//   	fetchUsers(): Observable<any> {
//   		return of(USERS);
//   	}

  private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100";

 constructor(private httpClient: HttpClient) { }

  public get(){
		return this.httpClient.get(this.SERVER_URL);
	}
}
