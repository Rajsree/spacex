import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  //setGroupFilter$ = new Subject<any>();
  	//getGroupFilter = this.setGroupFilter$.asObservable();

    filterObj = {
      land_success : "",
      launch_success :"",
      launch_year : ""
    };

    private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success="+this.filterObj.launch_success+"&amp;land_success="+this.filterObj.land_success+"&amp;launch_year="+this.filterObj.launch_year;

  	constructor(private httpClient: HttpClient) {}


  	// fetchUsers(): Observable<any> {
  	// 	return of(USERS);
  	// }

 //  private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100";
 //
 // constructor(private httpClient: HttpClient) { }

  public get(){
    //  console.log('Analysing :' + getGroupFilter);
		return this.httpClient.get(this.SERVER_URL);
	}
}
